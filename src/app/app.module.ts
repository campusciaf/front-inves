import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RegistroComponent } from './components/registro/registro.component';
import { HeaderwebComponent } from './components/web/headerweb/headerweb.component';
import { FooterwebComponent } from './components/web/footerweb/footerweb.component';
import { DashboardComponent } from './components/plataforma/dashboard/dashboard.component';
import { FooterComponent } from './components/plataforma/footer/footer.component';
import { MenuComponent } from './components/plataforma/menu/menu.component';
import { UsuariosComponent } from './components/plataforma/usuarios/usuarios.component';
import { UsuarioeditarComponent } from './components/plataforma/usuarioeditar/usuarioeditar.component';
import { DataTablesModule } from 'angular-datatables';
import { MiperfilComponent } from './components/plataforma/miperfil/miperfil.component';
import { HomeComponent } from './components/home/home.component';
import { SubmenuComponent } from './components/submenu/submenu.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent,
    HeaderwebComponent,
    FooterwebComponent,
    FooterComponent,
    MenuComponent,
    UsuariosComponent,
    UsuarioeditarComponent,
    MiperfilComponent,
    HomeComponent,
    SubmenuComponent
  ],
  imports: [
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
