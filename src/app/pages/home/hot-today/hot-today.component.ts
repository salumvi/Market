import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../../../services/products.service';

import { funciones } from 'src/app/funciones';

@Component({
  selector: 'app-hot-today',
  templateUrl: './hot-today.component.html',
  styleUrls: ['./hot-today.component.css']
})
export class HotTodayComponent implements OnInit {

  urlImagenes = environment.Path.urlImagenes;
  productosHot: any[] = [];
  renderFor = true;
  pintarCarruselHot = false;
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.cargarCarruselHot();
  }

  private cargarCarruselHot(){
    const hoy = new Date();
    this.ps.getproductos$().subscribe((productos: any[]) => {

      console.log(productos);
      productos.forEach((p) => {
        const offer = JSON.parse(p.offer);
        const offerDis = offer[0];
        const offerPor = offer[1];
        const offerHasta = new Date(
          parseInt(offer[2].split('-')[0]),
          parseInt(offer[2].split('-')[1]) - 1,
          parseInt(offer[2].split('-')[2]));

        if (offerHasta >= hoy && p.stock > 0) {
          this.productosHot.push({
            porcentaje: offer[1],
            hasta: offerHasta,
            stock: p.stock,
            gallery: JSON.parse(p.gallery),
            category: p.category,
            name: p.name,
            price: p.price,
            offer: p.offer
          });
        }
      });
      this.pintarCarruselHot = true;
    });
  }

  inciciarPlugin(lastindex) {
    if (this.renderFor && lastindex) {
      console.log(this.productosHot);
      this.renderFor = false;

      /*=============================================
          Ejecutar funciones globales con respecto a la galería mixta
          =============================================*/
      funciones.OwlCarouselConfig();
      funciones.CarouselNavigation();
      funciones.SlickConfig();
      funciones.ProductLightbox();

      /*=============================================
      Ejecutar funciones globales con respecto a las ofertas
      =============================================*/

      funciones.CountDown();
      /*=============================================
      Ejecutar funciones globales con respecto a las reseñas
      =============================================*/
      funciones.Rating();
      /*=============================================
      Ejecutar funciones globales con respecto al Stock
      =============================================*/
      funciones.ProgressBar();


    }

  }

}
