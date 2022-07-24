import { Component, Input, OnInit, Output } from '@angular/core';
import { IAnimal } from '../../models/animal.model';
import { AnimalService } from '../../services/animal/animal.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

@Input()
animal:any;
  
  constructor() {


   }

  ngOnInit(): void {
  }

}
