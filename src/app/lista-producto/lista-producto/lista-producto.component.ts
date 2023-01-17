import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] ;
  
  constructor(private productoService: ProductoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => { this.productos = data },
      err => { console.log(err) }
    );
  }

  borrar(producto: Producto) {
    this.productoService.delete(producto.id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK!', {
          timeOut: 3000
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-center',
        });
      }
    );


  }
}
