import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { ColourToggleComponent } from './components/shared/colour-toggle/colour-toggle.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    ColourToggleComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
