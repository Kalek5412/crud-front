import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  producto:Producto = new Producto();

  constructor(private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
  }

  onCreate(): void {
   
    this.productoService.save(this.producto).subscribe(
      data => {
        this.toastr.success('Producto creado', 'OK!', {
          timeOut: 3000
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-center',
        });
        this.router.navigate(['/']);
      }
    )

  }

}
