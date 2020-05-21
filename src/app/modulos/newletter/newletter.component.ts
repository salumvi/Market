import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-newletter',
  templateUrl: './newletter.component.html',
  styleUrls: ['./newletter.component.css']
})
export class NewletterComponent implements OnInit {
  urlImagenes = environment.Path.urlImagenes;


  constructor() { }

  ngOnInit(): void {
  }

}
