import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'saved',
        loadChildren: () =>
          import('./saved/saved.module').then((m) => m.SavedPageModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path:'',
        redirectTo:'/tabs/home',
        pathMatch:'full'
      }

    ],
  },
  {
    path: 'rooms/:roomId',
    loadChildren: () => import('./room-detail/room-detail.module').then( m => m.RoomDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
