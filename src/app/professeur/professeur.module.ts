import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseurRoutingModule } from './professeur-routing.module';
import { ProfesseurComponent } from './professeur-session/professeur.component';
import { FormsModule } from '@angular/forms';
import { ProfesseurCoursComponent } from './professeur-cours/professeur-cours.component';



@NgModule({
  declarations: [
    ProfesseurComponent,
    ProfesseurCoursComponent
  ],
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    FormsModule,
  ]
})
export class ProfesseurModule { }
