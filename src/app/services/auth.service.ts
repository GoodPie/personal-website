import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';

import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  static NOT_AUTHORIZED_ERROR = 'Invalid user';

  loginWithGoogle(): Promise<UserCredential> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {

    return this.auth.signOut();
  }
}
