import { Component } from '@angular/core';
import { GroupCardComponent } from '../group-card/group-card.component';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [GroupCardComponent],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.scss'
})
export class GroupListComponent {

}
