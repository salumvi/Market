import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { SearchComponent } from './search/search.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';


// import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponentesModule } from './home/home.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    ProductoComponent,
    SearchComponent,
    PageNoFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    HomeComponentesModule
    // PagesRoutingModule
  ],
  exports: [
    HomeComponent,
    ProductosComponent,
    ProductoComponent,
    SearchComponent,
    PageNoFoundComponent
  ],
  providers: []
})
export class PagesModule { }
