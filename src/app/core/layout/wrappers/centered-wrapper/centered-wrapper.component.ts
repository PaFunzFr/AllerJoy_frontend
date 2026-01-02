import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-centered-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './centered-wrapper.component.html',
  styleUrl: './centered-wrapper.component.scss'
})
export class CenteredWrapperComponent {

  @Input() bgColor: string = '#dbf0f4';

}
