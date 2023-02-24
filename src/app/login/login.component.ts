import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor( private loginService: LoginService,
  private router: Router)
  { }
  onSubmit(): void {
    if (this.loginService.login(this.email, this.password)) {
      this.router.navigate(['/add']);
    }
  }

}


