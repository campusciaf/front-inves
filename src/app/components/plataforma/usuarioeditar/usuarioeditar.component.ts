import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConectarApiService } from 'src/app/servicios/conectar-api.service';
import {Router} from '@angular/router';

ActivatedRoute

@Component({
  selector: 'app-usuarioeditar',
  templateUrl: './usuarioeditar.component.html',
  styleUrls: ['./usuarioeditar.component.css']
})
export class UsuarioeditarComponent  implements OnInit{

  datosUsuario: any;
  id: any;

 formEditar: FormGroup = this.formBuilder.group({});
  constructor(
    private conectarApiService:ConectarApiService,
    private _route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router,
  ){

    this.formEditar = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.minLength(6)]],
      user_email: ['', [Validators.required, Validators.email]],
      user_tel: ['', [Validators.required, Validators.minLength(6)]],

    });

  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');

    this.conectarApiService.usuariosEditar(this.id).subscribe((data) => {
      this.datosUsuario=data;

      this.formEditar = new FormGroup({
        'id_user': new FormControl(this.datosUsuario[0]["id_user"]),
        'user_name': new FormControl(this.datosUsuario[0]["user_name"]),
        'user_email': new FormControl(this.datosUsuario[0]["user_email"]),
        'user_tel': new FormControl(this.datosUsuario[0]["user_tel"]),
        'user_state': new FormControl(this.datosUsuario[0]["user_state"]),
        'token':new FormControl(localStorage.getItem('token')),
      });


    });
  }

  putForm(){
    let datos=this.formEditar.value;


    this.conectarApiService.usuariosPut(datos).subscribe((data) => {
      this.datosUsuario=data;
        if(data.status == "ok"){
          this.router.navigate(["/usuarios"]);
        }
    });
    
  }

}
