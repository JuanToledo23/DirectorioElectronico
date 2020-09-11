import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModule } from 'src/app/modules/material-module';
import { FiltrarDirectorioComponent } from './filtrar-directorio/filtrar-directorio.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NuevoFuncionarioComponent } from './nuevo-funcionario/nuevo-funcionario.component';
import { NuevaInstitucionComponent } from './nueva-institucion/nueva-institucion.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { EditarInstitucionComponent } from './editar-institucion/editar-institucion.component';
import { CargoComponent } from './cargo/cargo.component';
import { EditarCargoComponent } from './editar-cargo/editar-cargo.component';
import { CargoGuardarCambioDialog } from './cargo/modales/cargoGuardarCambios';
import { evaluacionComentarios } from './funcionario/modales/evaluacionComentarios';
import { evaluar } from './funcionario/modales/evaluar';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { FuncionarioGuardarCambios } from './editar-funcionario/modales/funcionarioGuardarCambios';
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component';
import { TreeModule } from 'angular-tree-component';
import { ContactoComponent } from './contacto/contacto.component';
import { EditarContactoComponent } from './editar-contacto/editar-contacto.component';
import { InstitucionAgregarRama } from './institucion/modales/institucionAgregarRama';
import { AutoridadModal } from './nuevo-funcionario/modales/autoridadModal';


@NgModule({
  declarations: [
    AppComponent,
    FiltrarDirectorioComponent,
    HeaderComponent,
    LoginComponent,
    NuevoFuncionarioComponent,
    NuevaInstitucionComponent,
    NuevoContactoComponent,
    FuncionarioComponent,
    InstitucionComponent,
    EditarInstitucionComponent,
    CargoComponent,
    EditarCargoComponent,
    CargoGuardarCambioDialog,
    AutoridadModal,
    evaluacionComentarios,
    evaluar,
    FuncionarioGuardarCambios,
    InstitucionAgregarRama,
    EditarFuncionarioComponent,
    ResultadoBusquedaComponent,
    ContactoComponent,
    EditarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    MaterialModule,
    FormsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    TreeModule.forRoot(),
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX'}
  ],
  entryComponents: [
    CargoGuardarCambioDialog,
    AutoridadModal,
    evaluacionComentarios,
    evaluar,
    FuncionarioGuardarCambios,
    InstitucionAgregarRama,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
