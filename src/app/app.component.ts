import { Component, OnInit  } from '@angular/core';

declare var jQuery: any;
declare var  $: any;
declare var init_funcion;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
     init_funcion();
  }
}
