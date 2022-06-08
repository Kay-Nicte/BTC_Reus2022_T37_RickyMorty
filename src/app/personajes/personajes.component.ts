import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  pjs:any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get("https://rickandmortyapi.com/api/character/1,3,5,9,11,13").subscribe(result => {this.pjs = result;}, error => {console.log('Error occurred')})}}
