import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabNavigationPage } from './tab-navigation.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabNavigationPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomePage,
          },
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../movies/movies.module#MoviesPageModule'
          },
          {
            path: '/:id',
            loadChildren: '../movie-details/movie-details.module#MovieDetialsModule'
          },
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: '../favorites/favorites.module#FavoritesPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

