import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isAuth = false;

  constructor(private router: Router) { }

  signIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        this.router.navigate(['/appareils']);
        resolve(true);
      }, 2000);
    });
  }

  signOut(): void {
    this.isAuth = false;
  }
}
