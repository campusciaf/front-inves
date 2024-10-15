import { Component } from '@angular/core';
import { ConectarApiService } from 'src/app/servicios/conectar-api.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(
    private conectarApiService:ConectarApiService,
    private router:Router
  ){}

  user_email: string | undefined;
  user_password: string | undefined;
  repeat_password : string | undefined;

  
  registro() {
    const user = { user_email: this.user_email, user_password: this.user_password, repeat_password: this.repeat_password };
    this.conectarApiService.registro(user).subscribe((data) => {
    console.log(data)
      if(data.status == "ok"){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro correcto" ,
          showConfirmButton: false,
          timer: 2500
        });
        this.router.navigate(['/login']);
        
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
