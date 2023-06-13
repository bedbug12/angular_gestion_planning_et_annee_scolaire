import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'rp', loadChildren: () => import('./rp/rp.module').then(m => m.RpModule) },
                         { path: 'professeur', loadChildren: () => import('./professeur/professeur.module').then(m => m.ProfesseurModule) }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
