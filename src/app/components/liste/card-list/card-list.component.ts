import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  
  animaux:any;
  constructor() { }

  ngOnInit(): void {
  }

}
