import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-animaux',
  templateUrl: './list-animaux.component.html',
  styleUrls: ['./list-animaux.component.scss']
})
export class ListAnimauxComponent implements OnInit {

  
  animaux:any[]=[
    {
    nom:'marguerite',
    numero:'1664AZE',
    troupeau:'la bande à guerite',
    parc:'la bas'
  },
  {
    nom:'Bertha',
    numero:'23456TER',
    troupeau:'la bande à guerite',
    parc:'la bas'

  }]
  constructor() { }

  ngOnInit(): void {
  }

}
