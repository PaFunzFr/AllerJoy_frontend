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
    label: 'Login',
    backgroundColor: 'var(--color-accent)',
    onClick: () => this.handleLogin(),
  };

  signupBtn: ButtonConfig = {
    label: 'Get Invite',
    backgroundColor: 'var(--color-accent)',
    onClick: () => this.handleSignup(),
  };

  handleLogin(): void {
    console.log("logged in");
  }

  handleSignup(): void {
    console.log("signed in");
  }

}
