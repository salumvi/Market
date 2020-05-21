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
    private scs: SubCategoriesService) { }

  getAll() {
    return this.http.get(this.urlApi + 'categorias.json');
  }


  getMenuCategorias() {

    this.getAll().subscribe((res: any) => {

      // tslint:disable-next-line:forin
      for (const key in res) {
        // aqui ya tengo una categoria
        const categoria = res[key];
        const subCatF: any[] = [];
        // array de los tiulos list de cada categoria
        const Arrytitlelist = JSON.parse(categoria.title_list);

        Arrytitlelist.forEach(title => {

          // vamos a buscar las subcategorias con los titulos

          this.scs.getSubCategoriasOfTitleList(title)
            .subscribe((cRes: SubCategoria[]) => {
//////////////////////// esto es para el menu Futer
              for (const sc of cRes) {
                subCatF.push({
                  nombreS: sc.nombreScategoria,
                  urlS: sc.url
                });
              }
              const catF = this.menuFoter.find(caF => caF.nombreC === categoria.name);
              if (catF === undefined) {
              this.menuFoter.push({
                nombreC: categoria.name,
                subCategoria: subCatF
              });
            } else {
              catF.subCategoria.push(subCatF);
            }
//////////////////////// esto es para el menu Futer
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

              this.categorias$.next(this.categoria);
            });
        });
      }
    });
  }

getCategoriasParaFuter$() : Observable<Categoria[]> {
  return this.categorias$.asObservable();
}




}
