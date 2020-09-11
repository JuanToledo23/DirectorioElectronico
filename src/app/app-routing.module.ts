import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FiltrarDirectorioComponent } from './filtrar-directorio/filtrar-directorio.component';
import { NuevoFuncionarioComponent } from './nuevo-funcionario/nuevo-funcionario.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { NuevaInstitucionComponent } from './nueva-institucion/nueva-institucion.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { EditarInstitucionComponent } from './editar-institucion/editar-institucion.component';
import { CargoComponent } from './cargo/cargo.component';
import { EditarCargoComponent } from './editar-cargo/editar-cargo.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EditarContactoComponent } from './editar-contacto/editar-contacto.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'filtrar', component: FiltrarDirectorioComponent },
  { path: 'nuevoFuncionario', component: NuevoFuncionarioComponent },
  { path: 'nuevoContacto', component: NuevoContactoComponent },
  { path: 'nuevaInstitucion', component: NuevaInstitucionComponent },
  { path: 'funcionario/:id', component: FuncionarioComponent },
  { path: 'editarFuncionario/:id', component: EditarFuncionarioComponent },
  { path: 'institucion', component: InstitucionComponent },
  { path: 'editarInstitucion', component: EditarInstitucionComponent},
  { path: 'cargo/:id', component: CargoComponent},
  { path: 'editar-cargo', component: EditarCargoComponent},
  { path: 'resultados', component: ResultadoBusquedaComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'editar-contacto', component: EditarContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
