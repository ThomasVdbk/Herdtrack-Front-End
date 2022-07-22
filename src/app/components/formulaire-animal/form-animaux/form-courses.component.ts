import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-courses',
  templateUrl: './form-courses.component.html',
  styleUrls: ['./form-courses.component.scss']
})
export class FormCoursesComponent implements OnInit {

  @Output()
  onAddAnimals: EventEmitter<any> = new EventEmitter();

  animal: FormGroup = this.formBuilder.group({
    id: [''],
    nom: ['', Validators.required],
    reference: ['', Validators.required],
    entree: ['', Validators.required],
    espece: ['', Validators.required],
    troupeau: ['', Validators.required]

  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  private resetForm(): void {
    this.animal.reset();
    this.submitted = false;

  }

  public onSubmit(): void {

    this.submitted = true;
    if (this.animal.valid) {
      this.onAddAnimals.emit(this.animal.value);
      console.log(this.animal.value);
      this.resetForm();
    } else {
      alert("Formulaire invalid");
    }
  }

  get form() {

    return this.animal.controls;

  };
}
