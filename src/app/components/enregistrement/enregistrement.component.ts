import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../models/animal.model';
import { IRace } from '../models/race.model';
import { AnimalService } from '../services/animal/animal.service';
import { RaceServiceService } from '../services/race/race-service.service';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.scss']
})
export class EnregistrementComponent implements OnInit {


animaux:IAnimal[] =[];

animal:string = "IAnimal";


  constructor(private animalservice:AnimalService) {
this.animalservice.findAll().subscribe((data)=>this.animaux = data);

  }

  ngOnInit(): void {
  }


  onSaveAnimal(animal: any) {
    console.log("ZATZAT");
    this.animalservice.save(animal).subscribe((newAnimal: any) => this.animaux.push(newAnimal));

  }


}




