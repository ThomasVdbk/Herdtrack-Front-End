import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAnimal } from '../models/animal.model';
import { AnimalService } from '../services/animal/animal.service';

@Component({
  selector: 'app-display-animal',
  templateUrl: './display-animal.component.html',
  styleUrls: ['./display-animal.component.scss']
})
export class DisplayAnimalComponent implements OnInit {
 
  data! : any;
 
  constructor(private route:ActivatedRoute,private router:Router,private animalService : AnimalService) {  }

  ngOnInit(): void {
    
      const id= this.route.snapshot.paramMap.get('id');
       
      if(id){
        this.data = this.animalService.findById(parseInt(id)).subscribe((data)=> this.data=data);
      }
        
    
    else{
      const id= this.route.snapshot.paramMap.get('id');
  }
  }
}
