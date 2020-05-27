import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {HttpClientModule} from '@angular/common/http';



// import { PagesRoutingModule } from './pages-routing.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { HotTodayComponent } from './hot-today/hot-today.component';
import { TopBestSellerComponent } from './top-best-seller/top-best-seller.component';

@NgModule({
  declarations: [
    BannerComponent,
    FeaturesComponent,
    PromotionsComponent,
    HotTodayComponent,
    TopBestSellerComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    FeaturesComponent,
    PromotionsComponent,
    HotTodayComponent,
    TopBestSellerComponent
  ],
  providers: []
})
export class HomeComponentesModule { }
