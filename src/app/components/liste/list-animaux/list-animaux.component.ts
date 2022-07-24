import { Component, Input, OnInit } from '@angular/core';
import { IAnimal } from '../../models/animal.model';
import { AnimalService } from '../../services/animal/animal.service';

@Component({
  selector: 'app-list-animaux',
  templateUrl: './list-animaux.component.html',
  styleUrls: ['./list-animaux.component.scss']
})
export class ListAnimauxComponent implements OnInit {

  animaux: IAnimal[]=[]
  
  constructor(private animalService : AnimalService) {this.animalService.findAll().subscribe((data)=>this.animaux= data); }

  ngOnInit(): void {
  }
  
  
  
}
