import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


registerLocaleData(localeFr, 'fr');
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DisplayAnimalComponent } from './components/display-animal/display-animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormulaireRegisterComponent } from './components/formulaire-register/formulaire-register.component';

import { ListAnimauxComponent } from './components/liste/list-animaux/list-animaux.component';

import { CardListComponent } from './components/liste/card-list/card-list.component';


import { FooterComponent } from './components/commons/footer/footer.component';
import { HeaderComponent } from './components/commons/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NotFoundComponent } from './components/commons/not-found/not-found.component';


import { FormCoursesComponent } from './components/formulaire-animal/form-animaux/form-courses.component';
import { DataCoursesComponent } from './components/formulaire-animal/data-animaux/data-courses.component';


import { EnregistrementComponent } from './components/enregistrement/enregistrement.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAnimalComponent,
    FormulaireRegisterComponent,
    ListAnimauxComponent,
    CardListComponent,
    FooterComponent,
    HeaderComponent,
    DataCoursesComponent,
    FormCoursesComponent,



  

    NotFoundComponent,
    EnregistrementComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSliderModule,
    MatCardModule,

    MatToolbarModule,
    ReactiveFormsModule,

    FormsModule,
    MatCardModule,
    ReactiveFormsModule ,
    MatToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
