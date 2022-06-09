import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  pjs:any = null;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(){
    this.personajesService.devolver().subscribe(result => this.pjs = result)
  }
}
