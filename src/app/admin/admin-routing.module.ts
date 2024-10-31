import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

import { AuthGuard } from "../core/guards/auth.guard";


const routes: Routes = [
    {
        path: '', component: AdminComponent, children:
        [
            { path: '', redirectTo: 'admin', pathMatch: 'full' },
            // { path: 'boletas', component: BoletasComponent,canActivate:[AuthGuard] },
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

export class AdminRoutingModule {
    constructor() {}
}
