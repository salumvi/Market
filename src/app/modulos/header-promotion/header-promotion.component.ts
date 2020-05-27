import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent implements OnInit {
  urlImagenes = environment.Path.urlImagenes;



  topBanner: object = null;
  urlImagen = '';
  preload = false;
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.cargarTopBanner();
  }


  cargarTopBanner() {
    this.preload = true;

    this.ps.productos$.subscribe((productos: any) => {
      //  const nuProductos = Object.keys(res).length;
      //  const indice = Math.round((Math.random() * nuProductos ));
      //  this.topBanner = JSON.parse(res[Object.keys(res)[indice]].top_banner);
      //  this.urlImagen = res[Object.keys(res)[indice]].category;
      const indice = Math.round((Math.random() * productos.length));
      this.topBanner = JSON.parse(productos[indice].top_banner);
      this.urlImagen = productos[indice].category;
      this.preload = false;
    });
  }



}
