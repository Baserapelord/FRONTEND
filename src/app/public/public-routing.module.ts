import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicComponent } from "./public.component";
import { LoginComponent } from "./login/containers/login.component";
import { LoginGuard } from "../core/guards/login.guard";
import { NotFoundComponent } from "../core/shared/components/not-found/not-found.component";
import { HomeComponent } from "./home/containers/home.component";
import { ToursComponent } from "./tours/containers/tours.component";
import { HotelesComponent } from "./hoteles/hoteles.component";
import { PaquetesComponent } from "./paquetes/paquetes.component";
import { ContactanosComponent } from "./contactanos/contactanos.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { ListarToursComponent } from "./tours/components/listar-tours/listar-tours.component";
import { DetalleToursComponent } from "./tours/components/detalle-tours/detalle-tours.component";

const routes: Routes = [
    {
        path: '', component: PublicComponent, children:
        [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'tours', component: ToursComponent },
            { path: 'hoteles', component: HotelesComponent },
            { path: 'paquetes', component: PaquetesComponent },
            { path: 'contactanos', component: ContactanosComponent },
            { path: 'carrito', component: CarritoComponent },
            { path: 'login-registro', component: LoginComponent, canActivate:[LoginGuard]},
            { path: 'notfound', component: NotFoundComponent },

            { path: 'detalle-tour', component: DetalleToursComponent }
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

export class PublicRoutingModule {
    constructor() {}
}
