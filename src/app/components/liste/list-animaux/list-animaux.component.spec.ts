import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimauxComponent } from './list-animaux.component';

describe('ListAnimauxComponent', () => {
  let component: ListAnimauxComponent;
  let fixture: ComponentFixture<ListAnimauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnimauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
