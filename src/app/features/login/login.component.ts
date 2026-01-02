import { Component } from '@angular/core';
import { CenteredWrapperComponent } from '../../core/layout/wrappers/centered-wrapper/centered-wrapper.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CenteredWrapperComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
