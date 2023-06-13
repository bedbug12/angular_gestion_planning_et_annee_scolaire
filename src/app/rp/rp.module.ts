import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpRoutingModule } from './rp-routing.module';
import { RpComponent } from './rp.component';
import { EtudiantFormComponent } from './etudiant/etudiant-form/etudiant-form.component';
import { ClasseFormComponent } from './classe/classe-form/classe-form.component';
import { AnneeScolaireFormComponent } from './anneeScolaire/annee-scolaire-form/annee-scolaire-form.component';
import { ModuleFormComponent } from './module/module-form/module-form.component';
import { ProfesseurFormComponent } from './professeur/professeur-form/professeur-form.component';
import { SalleFormComponent } from './salle/salle-form/salle-form.component';
import { SemestreFormComponent } from './semestre/semestre-form/semestre-form.component';
import { CoursFormComponent } from './cours/cours-form/cours-form.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';
import { SessionCoursFormComponent } from './sessionCours/session-cours-form/session-cours-form.component';
import { SessionCoursListComponent } from './sessionCours/session-cours-list/session-cours-list.component';
import { ProfesseurListComponent } from './professeur/professeur-list/professeur-list.component';
import { AnneeScolaireListComponent } from './anneeScolaire/annee-scolaire-list/annee-scolaire-list.component';
import { ClasseListComponent } from './classe/classe-list/classe-list.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { ModuleListComponent } from './module/module-list/module-list.component';
import { SalleListComponent } from './salle/salle-list/salle-list.component';
import { SemestreListComponent } from './semestre/semestre-list/semestre-list.component';
import { FormsModule } from '@angular/forms';
import { ClasseUpdateComponent } from './classe/classe-update/classe-update.component';
import { AnneeScolaireUpdateComponent } from './anneeScolaire/annee-scolaire-update/annee-scolaire-update.component';
import { CoursUpdateComponent } from './cours/cours-update/cours-update.component';
import { EtudiantUpdateComponent } from './etudiant/etudiant-update/etudiant-update.component';
import { ModuleUpdateComponent } from './module/module-update/module-update.component';
import { ProfesseurUpdateComponent } from './professeur/professeur-update/professeur-update.component';
import { SalleUpdateComponent } from './salle/salle-update/salle-update.component';
import { SemestreUpdateComponent } from './semestre/semestre-update/semestre-update.component';
import { SessionCoursUpdateComponent } from './sessionCours/session-cours-update/session-cours-update.component';


@NgModule({
  declarations: [
    RpComponent,
    EtudiantFormComponent,
    ClasseFormComponent,
    AnneeScolaireFormComponent,
    ModuleFormComponent,
    ProfesseurFormComponent,
    SalleFormComponent,
    SemestreFormComponent,
    CoursFormComponent,
    CoursListComponent,
    SessionCoursFormComponent,
    SessionCoursListComponent,
    ProfesseurListComponent,
    AnneeScolaireListComponent,
    ClasseListComponent,
    EtudiantListComponent,
    ModuleListComponent,
    SalleListComponent,
    SemestreListComponent,
    ClasseUpdateComponent,
    AnneeScolaireUpdateComponent,
    CoursUpdateComponent,
    EtudiantUpdateComponent,
    ModuleUpdateComponent,
    ProfesseurUpdateComponent,
    SalleUpdateComponent,
    SemestreUpdateComponent,
    SessionCoursUpdateComponent
  ],
  imports: [
    CommonModule,
    RpRoutingModule,
    FormsModule,
  ]
})
export class RpModule { }
