import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlApi = environment.Path.urlApiFirebase;

  productos$ = new Subject<any[]>();
  productos: any[] = [];
  constructor(private http: HttpClient) {
      //if(this.productos.length === 0){
        this.obtenerProductos();
      //}
    }

    getAll() {
    return this.http.get(`${this.urlApi}productos.json`)
      .pipe(map((res: any) => {
        const productos: any[] = [];
        // tslint:disable-next-line:forin
        for (const key in res) {
          productos.push(res[key]);
        }
        return productos;
      }));
  }

  private obtenerProductos(){

    this.getAll().subscribe((productos: any[]) => {
      this.productos = productos;
      this.productos$.next(productos);
    });
  }
// estamos pendientes del cambio de las productos
// lo envio para manejarlas en otro sitio. en este caso en el footer 
getproductos$(): Observable<any[]> {
  return this.productos$.asObservable();
}



}
