import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-btn',
  standalone: true,
  imports: [],
  templateUrl: './login-btn.component.html',
  styleUrl: './login-btn.component.scss'
})
export class LoginBtnComponent {

    @Input() onClick!: () => void;
    @Input() btnName!: string;
}
