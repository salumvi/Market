import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SubCategoriesService } from './sub-categories.service';
import { Categoria, TitleList, SubCategoria } from '../models/categoria-menu.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlApi = environment.Path.urlApiFirebase;
  categoria: Categoria[] = [];
  menuFoter: any[] = [];
  private categorias$ = new Subject<Categoria[]>();

  constructor(
    private http: HttpClient,
    private scs: SubCategoriesService) {

      if(this.categoria.length === 0 ) {
        this.getMenuCategorias();
      }

     }

  getAll() {
    return this.http.get(this.urlApi + 'categorias.json');
  }


  private getMenuCategorias() {

    this.getAll().subscribe((res: any) => {

      // tslint:disable-next-line:forin
      for (const key in res) {
        // aqui ya tengo una categoria
        const categoria = res[key];

        // array de los tiulos list de cada categoria
        const Arrytitlelist = JSON.parse(categoria.title_list);

        Arrytitlelist.forEach(title => {

          // vamos a buscar las subcategorias con los titulos

          this.scs.getSubCategoriasOfTitleList(title)
            .subscribe((cRes: SubCategoria[]) => {

              const arrayTitleList: TitleList[] = [];

              const _titleList: TitleList = {
                nombretitle: title,
                subcategorias: cRes
              };
              arrayTitleList.push(_titleList);

              const cat = this.categoria.find(ca => ca.nombreCategoria === categoria.name);
              let miCategoria: Categoria;
              if (cat === undefined) {

                miCategoria = {
                  icon: categoria.icon,
                  nombreCategoria: categoria.name,
                  url: categoria.url,
                  titleList: arrayTitleList
                };
                this.categoria.push(miCategoria);
              } else {
                cat.titleList.push(_titleList);
              }
              // aviso del cambio de las categorias, lo hago cada vez que se inserta una 
              this.categorias$.next(this.categoria);
            });
        });
      }
    });
  }

// estamos pendientes del cambio de las categorias
// lo envio para manejarlas en otro sitio. en este caso en el footer 
getCategoriasParaFuter$(): Observable<Categoria[]> {
  return this.categorias$.asObservable();
}




}
