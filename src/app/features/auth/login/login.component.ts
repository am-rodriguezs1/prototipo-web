import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;
  remember = false;
  submitted = false;

  constructor(private auth: AuthService) {}

  onLogin(): void {
    this.submitted = true;
    if (this.email && this.password) {
      this.auth.login(this.email, this.password);
    }
  }
}
