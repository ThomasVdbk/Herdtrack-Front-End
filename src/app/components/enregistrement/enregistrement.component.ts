import { Component, OnInit } from '@angular/core';
import { IRace } from '../models/race.model';
import { RaceServiceService } from '../services/race/race-service.service';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.scss']
})
export class EnregistrementComponent implements OnInit {


races:IRace[] =[];
race:string="Race";


  constructor(private raceservice:RaceServiceService) { 
this.raceservice.findAll().subscribe((data)=>this.races = data);

  }

  ngOnInit(): void {
  }

}




