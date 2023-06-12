import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbyTableComponent } from './hobby-table/hobby-table.component';

const routes: Routes = [
  { path: 'hobby', component: HobbyTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
