import { Injectable } from '@angular/core';
import { NavbarIcon } from '../../core/layout/models/navbar.interface';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

    navbar: NavbarIcon[] = [
    {
      name: 'Home',
      image: '../../assets/icons/nav/home.svg',
      path: ''
    },
    {
      name: 'Recipes',
      image: '../../assets/icons/nav/recipes.svg',
      path: ''
    },
    {
      name: 'Contacts',
      image: '../../assets/icons/nav/users.svg',
      path: ''
    },
    {
      name: 'Settings',
      image: '../../assets/icons/nav/settings.svg',
      path: ''
    },
  ]

}
