import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {path:'', component: ListaProductoComponent},
  {path:'detalle/:id', component: DetalleProductoComponent},
  {path:'nuevo',component:NuevoProductoComponent },
  {path:'editar/:id',component:EditarProductoComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
