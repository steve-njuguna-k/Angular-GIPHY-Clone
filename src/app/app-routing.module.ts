import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { GiphyDisplayComponent } from './components/giphy-display/giphy-display.component';
import { RandomComponent } from './components/random/random.component';

const routes: Routes = [
  {path: '', component: GiphyDisplayComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'random', component: RandomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
