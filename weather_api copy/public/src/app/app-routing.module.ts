import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';



const routes: Routes = [
  {path: ':city', component: BurbankComponent },
  // {path: 'seattle', component: SeattleComponent},
  {path: '', pathMatch: 'full', redirectTo: '/burbank'},
  // {path: ':city', component: `${city}`Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
