import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../../models/buttonConfig.interface';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './general-btn.component.html',
  styleUrl: './general-btn.component.scss'
})
export class GeneralBtnComponent {

    @Input({ required:true }) config!: ButtonConfig;

}
