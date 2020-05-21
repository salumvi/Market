import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { SubCategoria, Categoria, TitleList } from '../models/categoria-menu.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {

  urlApi = environment.Path.urlApiFirebase;

  constructor(private http: HttpClient) { }


  getSubCategoriasOfTitleList(title: string): Observable<SubCategoria[]> {
    return this.http.get(`${this.urlApi}sub-categorias.json?orderBy="title_list"&equalTo="${title}"`)
      .pipe(map((res: any) => {

        const subCategoria: SubCategoria[] = [];

        for (const key in res) {
          if (res[key]) {
            subCategoria.push({ nombreScategoria: res[key].name, url: res[key].url });
          }
        }
        return subCategoria;
      }));
  }

}
