import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-courses',
  templateUrl: './data-courses.component.html',
  styleUrls: ['./data-courses.component.scss']
})
export class DataCoursesComponent implements OnInit {

  animals: any[] = [];

  addAnimal(animal: any): void {
    console.log('addAnimal');
    this.animals.push(animal);
  }

  constructor() { }

  ngOnInit(): void {
  }

  get total():number {

    //return this.animals.reduce((total, current)=> total + current.prix, 0);

    return 1;
  }

}
