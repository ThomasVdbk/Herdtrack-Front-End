import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/commons/not-found/not-found.component';
import { DisplayAnimalComponent } from './components/display-animal/display-animal.component';
import { EnregistrementComponent } from './components/enregistrement/enregistrement.component';
import { FormulaireRegisterComponent } from './components/formulaire-register/formulaire-register.component';

import { ListAnimauxComponent } from './components/liste/list-animaux/list-animaux.component';
import { HomePageComponent } from './components/commons/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomePageComponent },
  { path: 'list', component: ListAnimauxComponent },
  { path: 'animal/:id', component: DisplayAnimalComponent },
  { path: 'enregistrer/ajouter', component: FormulaireRegisterComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
