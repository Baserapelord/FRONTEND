import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from "../core/shared/shared.module";
import { PublicComponent } from "./public.component";
import { LoginComponent } from './login/containers/login.component';
import { LoginGuard } from "../core/guards/login.guard";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./login/services/auth.service";
import { HomeComponent } from './home/containers/home.component';
import { ToursComponent } from './tours/containers/tours.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { WrapperComponent } from './home/components/wrapper/wrapper.component';
import { ListarToursComponent } from './tours/components/listar-tours/listar-tours.component';
import { DetalleToursComponent } from './tours/components/detalle-tours/detalle-tours.component';
import { ReservaToursComponent } from './tours/components/reserva-tours/reserva-tours.component';

@NgModule({
    imports: [
        PublicRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        PublicComponent,
        LoginComponent,
        HomeComponent,
        ToursComponent,
        HotelesComponent,
        PaquetesComponent,
        ContactanosComponent,
        CarritoComponent,
        WrapperComponent,
        ListarToursComponent,
        DetalleToursComponent,
        ReservaToursComponent,
    ],
    exports: [],
    providers: [
        AuthService,
        LoginGuard
    ]
})

export class PublicModule {
    constructor() { }
}
