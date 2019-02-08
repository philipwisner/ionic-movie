import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'search',
    loadChildren: './pages/movies/movies.module#MoviesPageModule'
  },
  {
    path: 'search/:id',
    loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule'
  },
  {
    path: 'favorites',
    loadChildren: './pages/favorites/favorites.module#FavoritesPageModule'
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule'
  },
  {
    path: 'tabs',
    loadChildren: './pages/tab-navigation/tab-navigation.module#TabNavigationPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
