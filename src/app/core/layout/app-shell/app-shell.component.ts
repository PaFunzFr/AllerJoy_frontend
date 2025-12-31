import { Component } from '@angular/core';
import { CenteredWrapperComponent } from '../wrappers/centered-wrapper/centered-wrapper.component';
import { LoginComponent } from '../../../features/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [CenteredWrapperComponent, RouterOutlet],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {

}
