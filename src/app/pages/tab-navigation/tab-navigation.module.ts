import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabNavigationPage } from './tab-navigation.page';
import { HomePageModule } from '../home/home.module';
import { MoviesPageModule } from '../movies/movies.module';
import { FavoritesPageModule } from '../favorites/favorites.module';
import { ProfilePageModule } from '../profile/profile.module';


const routes: Routes = [
  {
    path: '',
    component: TabNavigationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageModule,
    MoviesPageModule,
    FavoritesPageModule,
    ProfilePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabNavigationPage]
})
export class TabNavigationPageModule {}
