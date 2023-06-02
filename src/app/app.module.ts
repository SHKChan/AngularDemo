import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HobbyTableComponent } from './hobby-table/hobby-table.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageFourOfourComponent } from './page-four-ofour/page-four-ofour.component';
import { BookingComponent } from './booking/booking.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { TestChildContentComponent } from './test-child-content/test-child-content.component';
import { TestParentContentComponent } from './test-parent-content/test-parent-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MyProfileComponent, 
    HobbyTableComponent, AppNavComponent, PageFourOfourComponent, BookingComponent, TestChildComponent, TestParentComponent, TestChildContentComponent, TestParentContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
