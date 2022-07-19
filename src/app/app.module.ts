import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DisplayAnimalComponent } from './components/display-animal/display-animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NotFoundComponent } from './commons/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,

    DisplayAnimalComponent,

    FooterComponent,
    HeaderComponent,
    NotFoundComponent


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
