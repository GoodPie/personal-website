import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import firebase from 'firebase';
import {Router} from '@angular/router';
import UserCredential = firebase.auth.UserCredential;
import {ControlValueAccessor, FormControl, FormsModule} from '@angular/forms';
import {Login} from '../../../models/login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements ControlValueAccessor {

  errorMessage: string = null;

  // Form fields that we're modifying
  loginEmailAddress = '';
  loginPassword = '';

  constructor(private authService: AuthService, private router: Router) { }

  loginWithGoogle(): void {
    this.errorMessage = null;
    this.authService.loginWithGoogle()
      .then((credentials) => this.validateAdminClaim(credentials))
      .catch((err) => {
        this.errorMessage = err.message;
      });
  }

  loginWithEmailAndPassword(): void {
    // Reset the error message
    this.errorMessage = null;

    this.authService.loginWithEmailAndPassword(this.loginEmailAddress, this.loginPassword)
      .then((credentials) => this.validateAdminClaim(credentials))
      .catch((err) => {
        this.errorMessage = err.message;
      });
  }

  validateAdminClaim(credentials: UserCredential): void {

      // Redirect to base admin dashboard
      credentials.user.getIdTokenResult()
        .then((tokenResult) => {
          if (!!tokenResult.claims.admin) {
            // Redirect to admin portal
            this.router.navigate(['admin']);
          } else {
            this.errorMessage = AuthService.NOT_AUTHORIZED_ERROR;
          }
        })
        .catch((err) => {
          this.errorMessage = err.Message;
        });
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }
}

class AdminLoginComponentImpl extends AdminLoginComponent {



}

