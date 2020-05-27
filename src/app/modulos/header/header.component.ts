import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { SubCategoriesService } from '../../services/sub-categories.service';
import { Categoria, TitleList, SubCategoria } from '../../models/categoria-menu.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoria: Categoria[] = [];
  urlImagenes = environment.Path.urlImagenes;
  constructor(
    private cs: CategoriesService,
    private scs: SubCategoriesService) { }

  ngOnInit(): void {
    this.cs.getCategoriasParaFuter$().subscribe((res: any)=>{
      this.categoria = res;

    });
  }

/*
  getMenuCategorias() {

    this.cs.getAll().subscribe((res: any) => {

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
            });
        });
      }
    });
  }
*/


}
