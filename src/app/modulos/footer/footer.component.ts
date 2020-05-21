import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoriesService } from '../../services/categories.service';
import { Categoria } from 'src/app/models/categoria-menu.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  urlImagenes = environment.Path.urlImagenes;
  categorias: any[] = [];
  constructor(private cs: CategoriesService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }



  cargarMenu(){
    this.cs.getCategoriasParaFuter$().subscribe((res: Categoria[]) => {

      this.categorias = [];
      for (const categoria of res) {
        const subCat: any[] = [];
        for (const titulo of categoria.titleList) {
          for (const subcategoria of titulo.subcategorias) {
            subCat.push({
              nombreS: subcategoria.nombreScategoria,
              urlS: subcategoria.url
            });
          }
        }
        this.categorias.push({
          nombreC: categoria.nombreCategoria,
          subCategoria: subCat
        });
      }

    });
  }



}
