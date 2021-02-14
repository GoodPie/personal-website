import {Routes} from '@angular/router';
import {AngularFireAuthGuard, canActivate, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {AdminLoginComponent} from './components/admin/admin-login/admin-login.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['admin']);

export const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'login', component: AdminLoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
];
