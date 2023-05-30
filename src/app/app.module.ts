import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// this component has been remove manually
//import { PageMainComponent } from './page-main/page-main.component';
import { ContainerComponent } from './container/container.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HobbyTableComponent } from './hobby-table/hobby-table.component';

@NgModule({
  declarations: [
    AppComponent,
    //PageMainComponent,
    ContainerComponent,
    MyProfileComponent, 
    HobbyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
