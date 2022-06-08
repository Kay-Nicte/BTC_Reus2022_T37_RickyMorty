import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  titulo = 'UD27 - Rick&Morty Api Endpoint';
  autora = 'Ixabel Justo';

  constructor() {}

  ngOnInit(): void {}
}
