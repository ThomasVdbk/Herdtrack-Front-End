import { Component, OnInit } from '@angular/core';
import { IRace } from '../models/race.model';
import { RaceServiceService } from '../services/race/race-service.service';

@Component({
  selector: 'app-formulaire-register',
  templateUrl: './formulaire-register.component.html',
  styleUrls: ['./formulaire-register.component.scss']
})
export class FormulaireRegisterComponent implements OnInit {


  races:IRace[] =[];
race:string="Race";
raceservice!:RaceServiceService;

  constructor() { 
  


  }

  ngOnInit(): void {
  }

}
