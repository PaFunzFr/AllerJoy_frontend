import { Component } from '@angular/core';
import { CenteredWrapperComponent } from '../wrappers/centered-wrapper/centered-wrapper.component';

@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [CenteredWrapperComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {

}
