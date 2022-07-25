import { Component,Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {Event} from "@angular/router";
import { IAnimal } from '../models/animal.model';
import { IEntree } from '../models/entree.model';
import { AnimalService } from '../services/animal/animal.service';

@Component({
  selector: 'app-formulaire-register',
  templateUrl: './formulaire-register.component.html',
  styleUrls: ['./formulaire-register.component.scss']
})
export class FormulaireRegisterComponent implements OnInit {

  // form: FormGroup = new FormGroup({})
  
  // @Output()
  //  finish= new EventEmitter;
  entrees : any[]=[{
    id : 1,
    date : new Date('2022-07-21'),
    raison:'Naissance'
  },{id: 2, date : new Date('2022-07-21'),
raison: 'Achat'}]
  
   animal: FormGroup = this.builder.group({
    id: [''],
    nom: ['', Validators.required],
    reference: ['', Validators.required],
    entree: ['', Validators.required],
    // espece: ['', Validators.required],
    // troupeau: ['', Validators.required]

  })

  submitted: boolean = false;

  constructor(private builder: FormBuilder, private animalService:AnimalService) {



  }

  ngOnInit(): void {
    console.log("titi")
  }
  save() {
    this.animal.value.entree = this.entrees[this.animal.value.entree]
    this.animalService.save(this.animal.value)
      .subscribe(data => console.log(data), error => console.log(error));
  }
  private resetForm(): void {
    this.animal.reset();
    this.submitted = false;

  }
  onSubmit(){
    this.submitted = true;
    if(this.animal.valid){
      this.save();
      console.log(this.animal.value);
      this.resetForm();
    }else {
      alert("Formulaire invalid");
    }
      
    } 
    // this.finish.emit(this.form.value,);
    // console.log(this.form.value)
    get form() {

      return this.animal.controls;
  
    };
  }
