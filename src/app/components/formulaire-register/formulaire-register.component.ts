import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-register',
  templateUrl: './formulaire-register.component.html',
  styleUrls: ['./formulaire-register.component.scss']
})
export class FormulaireRegisterComponent implements OnInit {
races : any[] = [{id:39,libelle:'Croisé (bovin)'},{id:66,libelle:'prim holstein'},{id:38,libelle:'Charolais (bovin)'}]



  constructor() { }

  ngOnInit(): void {
  }

}
