import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/commons/not-found/not-found.component';
import { DisplayAnimalComponent } from './components/display-animal/display-animal.component';
import { EnregistrementComponent } from './components/enregistrement/enregistrement.component';
import { FormulaireRegisterComponent } from './components/formulaire-register/formulaire-register.component';

const routes: Routes = [
   {path:'',redirectTo: 'formulaire', pathMatch: "full"},
  { path: "formulaire", component: FormulaireRegisterComponent }
  // ,
  // { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
