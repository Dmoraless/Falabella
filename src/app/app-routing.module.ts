import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'welcome',
      loadChildren: 'app/welcome.module#WelcomeModule'
    },
    {
      path: 'history',
      loadChildren: 'app/history.module#HistoryModule'
    },
    { path: '',   
    redirectTo: '/welcome', 
    pathMatch: 'full' }

  ];

  @NgModule({

    imports: [RouterModule.forRoot(routes)],
    declarations:[],
    exports:[RouterModule],
    bootstrap:[]
  })

  export class AppRoutingModule{}