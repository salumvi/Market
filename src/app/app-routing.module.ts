import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { SearchComponent } from './pages/search/search.component';
import { PageNoFoundComponent } from './pages/page-no-found/page-no-found.component';



const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'productos', component: ProductosComponent },
     { path: 'producto', component: ProductoComponent },
     { path: 'buscar', component: SearchComponent },
     { path: '**', pathMatch: 'full' , component: PageNoFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
