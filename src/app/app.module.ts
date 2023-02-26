import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirmaListComponent } from './firma-list/firma-list.component';
import {HttpClientModule} from "@angular/common/http";
import { AddFirmaModalComponent } from './add-firma-modal/add-firma-modal.component';
import {FormsModule} from "@angular/forms";
import { EditFirmaModalComponent } from './edit-firma-modal/edit-firma-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppBarComponent } from './app-bar/app-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirmaListComponent,
    AddFirmaModalComponent,
    EditFirmaModalComponent,
    AppBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
