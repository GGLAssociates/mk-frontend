import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from './auth/auth.model';
import { ServersSummaryComponent } from './servers/servers-summary.component';
import { UsersSummaryComponent } from './users/users-summary.component';

const routes: Routes = [
  { path: 'servers', component: ServersSummaryComponent, data: {roles: [Role.Admin, Role.Visitor]} },
  { path: 'users', component: UsersSummaryComponent, data: {roles: [Role.Admin]} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
