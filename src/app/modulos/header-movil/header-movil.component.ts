import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoriesService } from '../../services/categories.service';
import { Categoria } from 'src/app/models/categoria-menu.model';

declare var jQuery: any;
declare var $: any;



@Component({
  selector: 'app-header-movil',
  templateUrl: './header-movil.component.html',
  styleUrls: ['./header-movil.component.css']
})
export class HeaderMovilComponent implements OnInit {
  urlImagenes = environment.Path.urlImagenes;

  categoria: Categoria[] = [];
  constructor(private cs: CategoriesService) { }

  ngOnInit(): void {

    this.categoria = this.cs.categoria;

    $(document).on('click', '.sub-toggle', function() {
     $(this).parent().children('ul').toggle();
    });
  }

}
