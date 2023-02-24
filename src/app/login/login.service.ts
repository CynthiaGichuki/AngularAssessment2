import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticatedProp = false;

  login(email: string, password: string): boolean {
    if (email === 'admin@travel.com' && password === 'password') {
      this.isAuthenticatedProp = true;
      return true;
    }
    else {
      return false;
    }
  }

  logout(): void {
    this.isAuthenticatedProp = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedProp;
  }

  constructor() { }

}
