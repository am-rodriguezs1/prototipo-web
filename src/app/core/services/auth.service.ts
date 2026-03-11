import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly KEY = 'vc_auth';

  constructor(private router: Router) {}

  login(email: string, password: string): void {
    localStorage.setItem(this.KEY, 'true');
    this.router.navigate(['/app/dashboard']);
  }

  logout(): void {
    localStorage.removeItem(this.KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.KEY) === 'true';
  }
}
