import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HeaderPromotionComponent } from './header-promotion/header-promotion.component';
import { HeaderMovilComponent } from './header-movil/header-movil.component';
import { NewletterComponent } from './newletter/newletter.component';
import { FooterComponent } from './footer/footer.component';
// import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderPromotionComponent,
    HeaderMovilComponent,
    NewletterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //PagesRoutingModule
  ],
  exports: [
    HeaderComponent,
    HeaderPromotionComponent,
    HeaderMovilComponent,
    NewletterComponent,
    FooterComponent
  ],
  providers: []
})
export class ModulosModule { }
