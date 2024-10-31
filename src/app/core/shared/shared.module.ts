import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar-client/sidebar-client.component';
import { AuthService } from 'src/app/public/login/services/auth.service';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NotFoundComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent,
    MaterialModule,
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers: [AuthService]
})

export class SharedModule {
  constructor() {}
}
