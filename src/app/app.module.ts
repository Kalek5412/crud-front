import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './lista-producto/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto/editar-producto.component';
import {HttpClientModule} from '@angular/common/http';

///exter//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
