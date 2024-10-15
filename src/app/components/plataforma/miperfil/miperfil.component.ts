import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConectarApiService } from 'src/app/servicios/conectar-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent {
  
  formEditar: FormGroup = this.formBuilder.group({});
  datosUsuario: any;
  datosSelect: any;
  datosSelect2: any;
  datosSelect3: any;

  constructor(
    private conectarApiService:ConectarApiService,
    private formBuilder: FormBuilder
  ){

    this.formEditar = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.minLength(6)]],
      id_workplace: ['', [Validators.required, Validators.email]],
      id_typejob: ['', [Validators.required, Validators.email]],
      id_title: ['', [Validators.required, Validators.email]],
      user_email: ['', [Validators.required, Validators.email]],
      user_tel: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      middlename: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required, Validators.minLength(6)]],
      facebook: ['', [Validators.required, Validators.minLength(6)]],
      addres1: ['', [Validators.required, Validators.minLength(150)]],
      addres2: ['', [Validators.required, Validators.minLength(150)]],
      codezip: ['', [Validators.required, Validators.minLength(20)]],


    });

  }

  ngOnInit() {
   
    this.conectarApiService.datosSelects("workplace").subscribe((data) => {
      this.datosSelect=data;
    });
    this.conectarApiService.datosSelects("typejob").subscribe((data) => {
      this.datosSelect2=data;
    });
    this.conectarApiService.datosSelects("title").subscribe((data) => {
      this.datosSelect3=data;
    });

    

    let idnum=localStorage.getItem('idnum');

    this.conectarApiService.miPerfil(idnum).subscribe((data) => {
      this.datosUsuario=data;
      this.formEditar = new FormGroup({
        'id_user': new FormControl(this.datosUsuario[0]["id_user"]),
        'user_name': new FormControl(this.datosUsuario[0]["user_name"]),
        'user_email': new FormControl(this.datosUsuario[0]["user_email"]),
        'user_tel': new FormControl(this.datosUsuario[0]["user_tel"]),
        'user_state': new FormControl(this.datosUsuario[0]["user_state"]),
        'id_workplace': new FormControl(this.datosUsuario[0]["id_workplace"]),
        'id_typejob': new FormControl(this.datosUsuario[0]["id_typejob"]),
        'id_title': new FormControl(this.datosUsuario[0]["id_title"]),
        'firstname': new FormControl(this.datosUsuario[0]["firstname"]),
        'middlename': new FormControl(this.datosUsuario[0]["middlename"]),
        'lastname': new FormControl(this.datosUsuario[0]["lastname"]),
        'facebook': new FormControl(this.datosUsuario[0]["facebook"]),
        'addres1': new FormControl(this.datosUsuario[0]["addres1"]),
        'addres2': new FormControl(this.datosUsuario[0]["addres2"]),
        'codezip': new FormControl(this.datosUsuario[0]["codezip"]),
        'token':new FormControl(localStorage.getItem('token')),
      });
    });
  }

  putForm(){
    let datos=this.formEditar.value;


    this.conectarApiService.miPerfilPut(datos).subscribe((data) => {
      this.datosUsuario=data;
        if(data.status == "ok"){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Perfil actualizado",
            showConfirmButton: false,
            timer: 1500
          });
        }
    });

    
  }

  
}
