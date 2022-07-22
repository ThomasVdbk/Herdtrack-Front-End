import { Component,Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Event} from "@angular/router";

@Component({
  selector: 'app-formulaire-register',
  templateUrl: './formulaire-register.component.html',
  styleUrls: ['./formulaire-register.component.scss']
})
export class FormulaireRegisterComponent implements OnInit {


  @Output()
   finish= new EventEmitter;

  form: FormGroup = new FormGroup({})

  constructor(private builder: FormBuilder) {



  }

  ngOnInit(): void {
    console.log("titi")
    this.form = this.builder.group({
      "id":[''],
      "nom": [''],
      "reference": [''],
      "entree":[''],
      "espece": [''],
       "troupeau": ['']
    })
  }


  onSubmit(){
    this.finish.emit(this.form.value,);
    console.log(this.form.value)
  }


}
