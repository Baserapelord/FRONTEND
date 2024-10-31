import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BoletaService } from './services/boleta.service';
import { AuthGuard } from '../core/guards/auth.guard';
import { AuthService } from '../public/login/services/auth.service';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent
  ],
  exports: [],
  providers: [AuthService,BoletaService,AuthGuard],
})
export class AdminModule {
  constructor() {}
}
