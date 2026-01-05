import { Component } from '@angular/core';
import { CenteredWrapperComponent } from '../../core/layout/wrappers/centered-wrapper/centered-wrapper.component';
import { GeneralBtnComponent } from '../../shared/ui/login-btn/general-btn.component';
import { ButtonConfig } from '../../shared/models/buttonConfig.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CenteredWrapperComponent, GeneralBtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginBtn: ButtonConfig = {
    label: 'LOGIN',
    backgroundColor: 'var(--color-accent)',
    route: '/'
  };

  signupBtn: ButtonConfig = {
    label: 'GET INVITE',
    backgroundColor: 'var(--color-primary-soft)',
    onClick: () => this.handleSignup(),
  };

  handleLogin(): void {
    console.log("logged in");
  }

  handleSignup(): void {
    console.log("signed in");
  }

}
