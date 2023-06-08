import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbyTableComponent } from './hobby-table/hobby-table.component';
import { ContainerComponent } from './container/container.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PageFourOfourComponent } from './page-four-ofour/page-four-ofour.component';
import { BookingComponent } from './booking/booking.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { TestParentContentComponent } from './test-parent-content/test-parent-content.component';
import { AddHobbyComponent } from './add-hobby/add-hobby.component';

const routes: Routes = [
  { path: 'container', component: ContainerComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'hobby-table', component: HobbyTableComponent },
  { path: 'hobby-app', component: AddHobbyComponent },
  { path: 'hobby/:id', component: BookingComponent },
  { path: 'help', component: TestParentContentComponent },
  { path: '', redirectTo: 'container', pathMatch: 'full' },
  { path: '**', component: PageFourOfourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
