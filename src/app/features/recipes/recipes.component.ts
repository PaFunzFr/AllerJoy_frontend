import { Component } from '@angular/core';
import { FullscreenWrapperComponent } from '../../core/layout/wrappers/fullscreen-wrapper/fullscreen-wrapper.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { PieChartComponent } from '../../shared/ui/pie-chart/pie-chart.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [FullscreenWrapperComponent, RecipeCardComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {

}
