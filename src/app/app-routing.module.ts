import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RandomComponent } from './components/random/random.component';
import { SearchComponent } from './components/search/search.component';
import { TrendingComponent } from './components/trending/trending.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'random', component: RandomComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
