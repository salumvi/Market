import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductsService } from 'src/app/services/products.service';
import { funciones } from 'src/app/funciones';

@Component({
  selector: 'app-home-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  urlImagenes = environment.Path.urlImagenes;
  promotions: any[] = [];
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.cargarImagenesFeatures();
  }

  cargarImagenesFeatures() {
    // solo cargo 2 productos aleatorios
    // cacar 2 numeros aleatorios del total que hay:


    this.ps.getproductos$().subscribe((productos: any[]) => {
      const numeros = funciones.NumerosAlAzar(productos.length, 2);
      numeros.forEach(numero => {
        const producto = productos[numero];
        this.promotions.push({
          img: producto.default_banner,
          category: producto.category,
          url: producto.url
        });
      });
    });
  }

}
