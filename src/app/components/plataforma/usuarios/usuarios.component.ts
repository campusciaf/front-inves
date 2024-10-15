import { Component,EventEmitter, ViewChild } from '@angular/core';
import { ConectarApiService } from 'src/app/servicios/conectar-api.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { LanguageApp } from '../lenguajeDataTable';
import * as $ from 'jquery';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [NgbModalConfig, NgbModal],
})




export class UsuariosComponent {
  @ViewChild('closebutton') closebutton: any;

  listaUsuarios: any;
  datosUsuario: any;

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective | undefined;
  dtOptions: DataTables.Settings = {};
  persons: any = [];
  dtTrigger: Subject<any> = new Subject();
  dtElement!: DataTableDirective;
  dtInstance = {};

  modal: EventEmitter<any> = new EventEmitter(); 
  
  constructor(
    private conectarApiService:ConectarApiService,
    private router:Router,
		private modalService: NgbModal,
 
    
  ) {}

  editarInformacion(id: string){
    this.router.navigate(["/usuarioseditar/"+id]);
  }
  eliminarUsuario(id: number){

    Swal.fire({
      customClass: {
        confirmButton: "btn btn-success",
      },
      title: "Esta seguro de eliminar el usuario?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        let datos=JSON.stringify({
          "token" : localStorage.getItem("token"),
          "id_user" : id,
        });
    
        this.conectarApiService.usuariosDelete(datos).subscribe((data) => {
          this.datosUsuario=data;
            if(data.status == "ok"){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuario eliminado",
                showConfirmButton: false,
                timer: 1500
              });
              location.reload();
            }
        });
        
      } 
    });

  }
 
  open(content: any) {
		this.modalService.open(content, { centered: true });
	}




 
  ngOnInit() :void {
    this.dtOptions = {
      language: LanguageApp.spanish_datatables,
      pagingType: "full_numbers",
      pageLength: 10,
      scrollCollapse: true,
      processing: true,
      destroy: false,
      scrollY: "50vh",
      
      columns: [
        { data: "" },
        { data: "acciones" },
        { data: "Nick" },
        { data: "Correo" },
        { data: "Telefono" },
        { data: "Estado" }
      ],
      columnDefs: [
        {
          width: "10% !important;",
          targets: 0,
          searchable: false,
          orderable: false,
          className: "dt-body-center"
        }
      ]
    };
    
    this.conectarApiService.usuarios().subscribe((data) => {
      this.listaUsuarios=data;
      this.dtTrigger.next(this.listaUsuarios);
    });

  }

  
  ngOnDestroy() :void{
    this.dtTrigger.unsubscribe();
    
  }


  user_email: string | undefined;
  user_password: string | undefined;
  repeat_password : string | undefined;

  registro() {
    const user = { 
      user_email: this.user_email, 
      user_password: this.user_password, 
      repeat_password: this.repeat_password 
    };
    this.conectarApiService.registro(user).subscribe((data) => {
      if(data.status == "ok"){
        this.modalService.dismissAll();// codigo para cerrar el modal
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro correcto" ,
          showConfirmButton: false,
          timer: 2500
        });
        location.reload();
      }else{
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: data.result.error_msg ,
          showConfirmButton: false,
          timer: 2500
        });
      }
    });
  }







}




