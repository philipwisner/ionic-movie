import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'movies',
    loadChildren: './pages/movies/movies.module#MoviesPageModule'
  },
  {
    path: 'movies/:id',
    loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule'
  },
  {
    path: 'favorites',
    loadChildren: './favorites/favorites.module#FavoritesPageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
