import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
      path: '', component: ModulesComponent, children:
      [
          { path: '', redirectTo: 'tecnicos', pathMatch: 'full' },
          // { path: 'gestion-carga', component: GestionCargaComponent },
      ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
exports: [
    RouterModule
]
})
export class ModulesRoutingModule { }
