import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guards';
import { RegistroComponent } from './components/registro/registro.component';

import { DashboardComponent } from './components/plataforma/dashboard/dashboard.component';
import { UsuariosComponent } from './components/plataforma/usuarios/usuarios.component';
import { UsuarioeditarComponent } from './components/plataforma/usuarioeditar/usuarioeditar.component';
import { MiperfilComponent } from './components/plataforma/miperfil/miperfil.component';


const routes: Routes = [
  {path: '', redirectTo:'login' , pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},

  {
    path: 'dashboard', 
    component:DashboardComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'usuarios', 
    component:UsuariosComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'usuarioseditar/:id', 
    component:UsuarioeditarComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'miperfil', 
    component:MiperfilComponent,
    canActivate:[LoginGuard]
  },

 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
