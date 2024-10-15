import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { ConectarApiService } from 'src/app/servicios/conectar-api.service';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent implements OnInit, OnDestroy {


  f: FormGroup;

  constructor(
    private conectarApiService:ConectarApiService,
    private fb: FormBuilder,
    private router:Router
  ) {
    this.f = this.fb.group({
      user_email: ['', [Validators.required, Validators.email]],
      user_password: ['', [Validators.required,, Validators.minLength(6)]],

    });
  }

  user_email: string | undefined;
  user_password: string | undefined;



  login() {

      const user = { user_email: this.user_email, user_password: this.user_password };
      this.conectarApiService.login(user).subscribe((data) => {
        if(data.status == "ok"){
          localStorage.setItem('token',data.result.token)
          localStorage.setItem('idnum',data.result.idnum)
          this.router.navigate(['dashboard']);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Ingreso seguro" ,
            showConfirmButton: false,
            timer: 2500
          });
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

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}

