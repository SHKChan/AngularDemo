import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbyTableComponent } from './hobby-table/hobby-table.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  { path: 'hobby', component: HobbyTableComponent },
  { path: 'profile', component: MyProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
