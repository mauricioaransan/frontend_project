import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EditFirmaModalComponent} from "./edit-firma-modal/edit-firma-modal.component";
import {FirmaListComponent} from "./firma-list/firma-list.component";

const routes: Routes= [
  {path: 'firmas', component : FirmaListComponent},
  {path: '',redirectTo:'firmas', pathMatch: 'full'},
  {path: 'update-firma', component : EditFirmaModalComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
