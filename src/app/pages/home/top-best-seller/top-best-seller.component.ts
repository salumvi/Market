import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-top-best-seller',
  templateUrl: './top-best-seller.component.html',
  styleUrls: ['./top-best-seller.component.css']
})
export class TopBestSellerComponent implements OnInit {

  urlImagenes = environment.Path.urlImagenes;
  constructor() { }

  ngOnInit(): void {
  }

}
