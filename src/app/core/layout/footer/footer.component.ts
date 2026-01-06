import { Component, inject } from '@angular/core';
import { NavbarService } from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  navbarService = inject(NavbarService);
  
}
