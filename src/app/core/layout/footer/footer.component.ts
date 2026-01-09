import { Component, inject } from '@angular/core';
import { NavbarService } from '../../../shared/services/navbar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  navbarService = inject(NavbarService);

  constructor(private router: Router) {}

  navigate(route:string):void {
    if (route) {
      this.router.navigateByUrl(route);
    }
  }

}