import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpComponent } from './rp.component';
import { EtudiantFormComponent } from './etudiant/etudiant-form/etudiant-form.component';
import { AnneeScolaireFormComponent } from './anneeScolaire/annee-scolaire-form/annee-scolaire-form.component';
import { ClasseFormComponent } from './classe/classe-form/classe-form.component';
import { ModuleFormComponent } from './module/module-form/module-form.component';
import { SalleFormComponent } from './salle/salle-form/salle-form.component';
import { ProfesseurFormComponent } from './professeur/professeur-form/professeur-form.component';
import { SemestreFormComponent } from './semestre/semestre-form/semestre-form.component';
import { ProfesseurListComponent } from './professeur/professeur-list/professeur-list.component';
import { CoursListComponent } from './cours/cours-list/cours-list.component';
import { SessionCoursListComponent } from './sessionCours/session-cours-list/session-cours-list.component';
import { SalleListComponent } from './salle/salle-list/salle-list.component';
import { CoursFormComponent } from './cours/cours-form/cours-form.component';
import { SessionCoursFormComponent } from './sessionCours/session-cours-form/session-cours-form.component';
import { SemestreListComponent } from './semestre/semestre-list/semestre-list.component';
import { ModuleListComponent } from './module/module-list/module-list.component';
import { AnneeScolaireListComponent } from './anneeScolaire/annee-scolaire-list/annee-scolaire-list.component';
import { ClasseListComponent } from './classe/classe-list/classe-list.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { ClasseUpdateComponent } from './classe/classe-update/classe-update.component';
import { AnneeScolaireUpdateComponent } from './anneeScolaire/annee-scolaire-update/annee-scolaire-update.component';
import { EtudiantUpdateComponent } from './etudiant/etudiant-update/etudiant-update.component';
import { ModuleUpdateComponent } from './module/module-update/module-update.component';
import { SalleUpdateComponent } from './salle/salle-update/salle-update.component';
import { ProfesseurUpdateComponent } from './professeur/professeur-update/professeur-update.component';
import { SemestreUpdateComponent } from './semestre/semestre-update/semestre-update.component';
import { CoursUpdateComponent } from './cours/cours-update/cours-update.component';
import { SessionCoursUpdateComponent } from './sessionCours/session-cours-update/session-cours-update.component';

const routes: Routes = [
  { path: 'add', component: RpComponent },
  { path: 'add/annee-scolaire', component: AnneeScolaireFormComponent },
  { path: 'add/classe', component: ClasseFormComponent },
  { path: 'add/etudiant', component: EtudiantFormComponent },
  { path: 'add/module', component: ModuleFormComponent },
  { path: 'add/salle', component: SalleFormComponent },
  { path: 'add/professeur', component: ProfesseurFormComponent },
  { path: 'add/semestre', component: SemestreFormComponent },
  { path: 'add/cours', component: CoursFormComponent },
  { path: 'add/session-cours', component: SessionCoursFormComponent },
  { path: 'list/professeurs', component: ProfesseurListComponent },
  { path: 'list/cours', component: CoursListComponent },
  { path: 'list/sessions-cours', component: SessionCoursListComponent },
  { path: 'list/salles', component: SalleListComponent},
  { path: 'list/semestres', component: SemestreListComponent},
  { path: 'list/modules', component: ModuleListComponent},
  { path: 'list/annees-scolaires', component: AnneeScolaireListComponent},
  { path: 'list/classes', component: ClasseListComponent},
  { path: 'list/etudiants', component: EtudiantListComponent},
  { path: 'update/annee-scolaire/:id', component: AnneeScolaireUpdateComponent},
  { path: 'update/classe/:id', component: ClasseUpdateComponent},
  { path: 'update/etudiant/:id', component: EtudiantUpdateComponent},
  { path: 'update/module/:id', component: ModuleUpdateComponent},
  { path: 'update/salle/:id', component: SalleUpdateComponent},
  { path: 'update/professeur/:id', component: ProfesseurUpdateComponent},
  { path: 'update/semestre/:id', component: SemestreUpdateComponent},
  { path: 'update/cours/:id', component: CoursUpdateComponent },
  { path: 'update/session-cours/:id', component: SessionCoursUpdateComponent},
  { path: 'delete/annee-scolaire/:id', component: AnneeScolaireListComponent},
  { path: 'delete/classe/:id', component: ClasseListComponent},
  { path: 'delete/etudiant/:id', component: EtudiantListComponent},
  { path: 'delete/module/:id', component: ModuleListComponent},
  { path: 'delete/salle/:id', component: SalleListComponent},
  { path: 'delete/professeur/:id', component: ProfesseurListComponent},
  { path: 'delete/semestre/:id', component: SemestreListComponent},
  { path: 'delete/cours/:id', component: CoursListComponent },
  { path: 'delete/session-cours/:id', component: SessionCoursListComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpRoutingModule { }
