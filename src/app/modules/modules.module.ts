import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { SharedModule } from '../core/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { PayrollService } from './services/payroll.service';


@NgModule({
  declarations: [
    ModulesComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    ReactiveFormsModule, // Asegúrate de que esto esté aquí
  ],
  providers: [
    PayrollService
  ]
})
export class ModulesModule { }
