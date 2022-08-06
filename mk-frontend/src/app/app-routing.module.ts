import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersSummaryComponent } from './servers/servers-summary.component';
import { UsersSummaryComponent } from './users/users-summary.component';
import { WorldsSummaryComponent } from './worlds/worlds-summary.component';

const routes: Routes = [
  { path: 'servers', component: ServersSummaryComponent },
  { path: 'users', component: UsersSummaryComponent},
  { path: 'worlds', component: WorldsSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
