import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireRegisterComponent } from './formulaire-register.component';

describe('FormulaireRegisterComponent', () => {
  let component: FormulaireRegisterComponent;
  let fixture: ComponentFixture<FormulaireRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
