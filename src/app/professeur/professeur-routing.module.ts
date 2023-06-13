import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseurComponent } from './professeur-session/professeur.component';
import { ProfesseurCoursComponent } from './professeur-cours/professeur-cours.component';


const routes: Routes = [
  { path: '', component: ProfesseurComponent },
  { path: 'cours', component: ProfesseurCoursComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }
