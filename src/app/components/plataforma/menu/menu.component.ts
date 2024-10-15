import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ConectarApiService } from 'src/app/servicios/conectar-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor( private conectarApiService:ConectarApiService,){}

  $consulta: any;
   user_name: any;

  ngOnInit() : void{

    let idnum=localStorage.getItem('idnum');
    let token=localStorage.getItem('token');

    this.conectarApiService.datoCuenta(idnum,token).subscribe((data) => {
      this.$consulta=data;
      if(data.length==1){
        this.user_name=data[0]['user_name'];
      }
      else{
        localStorage.removeItem('token');
        localStorage.removeItem('idnum');
        this.router.navigate(['/login'])
      }
   
    });

  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  router = inject(Router)
  logAutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])


  }

  setThema(t: string) {
    document.body.classList.toggle('dark') //para un solo boton
    document.documentElement.className = t;
  }
  
}


