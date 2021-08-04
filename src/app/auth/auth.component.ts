import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  errorMessage: string = '';

  constructor(private service: AuthService, private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(username: string, password: any) {
    this.isLoading = true;
    if (this.isLoginMode) {
      this.service.login(username, password).subscribe(
        (res) => {
          this.router.navigate(['/']);
          this.isLoading = false;
        },
        (errorRes) => {
          switch (errorRes.error.message) {
            case '':
              this.errorMessage = 'Error occured';
          }
          this.isLoading = false;
        }
      );
    } else {
      this.service.createAccount(username, password).subscribe(
        (res) => {
          this.isLoading = false;
          this.service.login(username, password).subscribe(
            (res) => {
              this.router.navigate(['/']);
              this.isLoading = false;
            },
            (errorRes) => {
              switch (errorRes.error.message) {
                case '':
                  this.errorMessage = 'Error occured';
              }
              this.isLoading = false;
            }
          );
        },
        (errorRes) => {
          switch (errorRes.error.message) {
            case '':
              this.errorMessage = 'Error occured';
          }
          this.isLoading = false;
        }
      );
    }
  }
}
