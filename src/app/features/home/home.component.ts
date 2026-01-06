import { Component } from '@angular/core';
import { GeneralBtnComponent } from '../../shared/ui/general-btn/general-btn.component';
import { ButtonConfig } from '../../shared/models/buttonConfig.interface';
import { FullscreenWrapperComponent } from '../../core/layout/wrappers/fullscreen-wrapper/fullscreen-wrapper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FullscreenWrapperComponent,GeneralBtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  startBtn: ButtonConfig = {
    label: "START",
    backgroundColor: 'var(--color-primary)',
    route: '/'
  }

}
