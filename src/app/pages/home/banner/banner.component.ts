import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProductsService } from '../../../services/products.service';
import { funciones } from '../../../funciones';




@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  urlImagenes = environment.Path.urlImagenes;
  banner: any[] = [];
  isPreload = false;
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.cargarImagenesBanner();
  }

  cargarImagenesBanner() {
    // solo cargo 5 productos aleatorios
    // cacar 5 numeros aleatorios del total que hay:


    this.ps.getproductos$().subscribe((productos: any[]) => {

      const numeros = funciones.NumerosAlAzar(productos.length, 5);
      numeros.forEach(numero => {
        const producto = productos[numero];
        this.banner.push({
          hs: JSON.parse(producto.horizontal_slider),
          category: producto.category,
          url: producto.url
        });
      });

      this.isPreload = true;
    });
  }

 
  ejecutaScript(ultimo) {
    if (ultimo) {
      funciones.OwlCarouselConfig();
      funciones.BackgroundImage();
    }
  }
}
