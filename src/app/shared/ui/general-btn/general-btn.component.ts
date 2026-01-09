import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../../models/buttonConfig.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './general-btn.component.html',
  styleUrl: './general-btn.component.scss'
})

export class GeneralBtnComponent {
  @Input({ required:true }) config!: ButtonConfig;

  constructor(private router: Router) {}

    navigate() {
      if (this.config.route) {
        this.router.navigateByUrl(this.config.route);
      } else {
        this.config.onClick?.();
      }
    }
}
