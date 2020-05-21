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


  productos: any[] = [];
  topBanner: object = null;
  preload = false;
constructor(private ps: ProductsService) { }

ngOnInit(): void {
  this.cargarTopBanner();
}


cargarTopBanner(){
  this.preload = true;
  this.ps.getAll().subscribe((res: any) => {
   const indice = Math.round((Math.random() * res.length));
   this.topBanner = JSON.parse(res[Object.keys(res)[indice]].top_banner);
   this.preload = false;
  },err =>{
    // no hacemos nada.
  });

}

}
