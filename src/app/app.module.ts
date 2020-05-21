import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modulos/header/header.component';
import { HeaderPromotionComponent } from './modulos/header-promotion/header-promotion.component';
import { HeaderMovilComponent } from './modulos/header-movil/header-movil.component';
import { NewletterComponent } from './modulos/newletter/newletter.component';
import { FooterComponent } from './modulos/footer/footer.component';
import { TitleListPipe } from './pipes/title-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPromotionComponent,
    HeaderMovilComponent,
    NewletterComponent,
    FooterComponent,
    TitleListPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
