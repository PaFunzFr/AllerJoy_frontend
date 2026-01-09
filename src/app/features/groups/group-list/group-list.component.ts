import { Component } from '@angular/core';
import { GroupCardComponent } from '../group-card/group-card.component';
import { GeneralBtnComponent } from '../../../shared/ui/general-btn/general-btn.component';
import { ButtonConfig } from '../../../shared/models/buttonConfig.interface';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [GroupCardComponent,GeneralBtnComponent],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.scss'
})
export class GroupListComponent {

  moreGroups: ButtonConfig = {
    label: 'MEHR',
    backgroundColor: 'var(--color-accent)',
    route: '/'
  };

}
