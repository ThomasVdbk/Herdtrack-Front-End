import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../models/animal.model';
import { AnimalService } from '../services/animal/animal.service';

@Component({
  selector: 'app-display-animal',
  templateUrl: './display-animal.component.html',
  styleUrls: ['./display-animal.component.scss']
})
export class DisplayAnimalComponent implements OnInit {
 
  
 
  constructor() {  }

  ngOnInit(): void {
  }

}
