import { Component } from '@angular/core';
import { PieChartComponent } from '../../../shared/ui/pie-chart/pie-chart.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [PieChartComponent],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {

}
