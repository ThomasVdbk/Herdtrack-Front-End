import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

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
import { EnregistrementComponent } from './components/enregistrement/enregistrement.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayAnimalComponent,
    FormulaireRegisterComponent,
    ListAnimauxComponent,
    CardListComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    EnregistrementComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
