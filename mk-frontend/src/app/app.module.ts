import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { SidenavComponent } from './toolbar/sidenav.component'
import { MatButtonModule} from '@angular/material/button';
import { ServersSummaryComponent } from './servers/servers-summary.component';
import { UsersSummaryComponent } from './users/users-summary.component';
import { LoginComponent } from './auth/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmDialogComponent } from './common/dialog/confirm-dialog.component';
import { MatCardModule } from '@angular/material/card'
import { AuthInterceptor } from './common/middleware/auth-interceptor';
import { CreateServerDialogComponent } from './servers/create-server-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MessageDialogComponent } from './common/dialog/message-dialog.component';
import { AddUserDialogComponent } from './users/add-user-dialog.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { CanActivateRoute } from './auth/can-activate';
import { SnackbarComponent } from './common/dialog/snackbar.component';
import { MatSnackBarModule} from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    ServersSummaryComponent,
    UsersSummaryComponent,
    LoginComponent,
    ConfirmDialogComponent,
    CreateServerDialogComponent,
    MessageDialogComponent,
    AddUserDialogComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CanActivateRoute,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
