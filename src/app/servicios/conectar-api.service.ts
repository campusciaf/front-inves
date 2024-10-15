import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConectarApiService {
  API: string='http://localhost/revista_api_php';
  // API: string='https://ciaf.digital/revista_api_php';
  autorizacion = 'KFTDQFYvqbPLXkHTuXQJR4Qy3vUryK';

  constructor(private clienteHttp:HttpClient) { }


  // obtenerNoticias(){
  //   const headers = new HttpHeaders({'Autorizacion': this.autorizacion});
    
  //   return this.clienteHttp.post(this.API+ '/login.php',{headers});
  // }

  login(datos: any): Observable<any> {
    return this.clienteHttp.post(this.API+ '/login.php', datos);
  }

  datoCuenta(id:any,token: any): Observable<any>{
    return this.clienteHttp.get(this.API+ '/cuenta.php?id='+id+'&token='+token);
  }

  registro(datos: any): Observable<any> {
    return this.clienteHttp.post(this.API+ '/registro.php', datos);
  }

  usuarios(): Observable<any>{
    return this.clienteHttp.get(this.API+ '/usuarios.php?page=1');
  }

  usuariosEditar(id: string | null): Observable<any>{
    return this.clienteHttp.get(this.API+ '/usuarios.php?id='+id);
  }

  usuariosPut(datos:any): Observable<any>{
    return this.clienteHttp.put(this.API+ '/usuarios', datos);
  }
  
  usuariosDelete(datos:any): Observable<any>{

    
    let Options ={
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    }),
    body:datos
  }
    return this.clienteHttp.delete(this.API+ '/usuarios',Options);
  }

  miPerfil(id: string | null): Observable<any>{
    return this.clienteHttp.get(this.API+ '/miperfil.php?id='+id);
  }

  miPerfilPut(datos:any): Observable<any>{
    return this.clienteHttp.put(this.API+ '/miperfil', datos);
  }

  datosSelects(id: string | null): Observable<any>{
    return this.clienteHttp.get(this.API+ '/datosselects.php?id='+id);
  }


}
