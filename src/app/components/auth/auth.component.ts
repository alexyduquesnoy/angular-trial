import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

authStatus: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  signIn() {
    this.authService.signIn().then(() => {
      this.authStatus = this.authService.isAuth;
    });
  }

  signOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
