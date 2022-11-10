import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes =
  [
    {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule)
  },
  {
    path: 'add/content',
    loadChildren: () => import('./add-content/add-content.module').then(m => m.AddContentModule)
  },
  {
    path: 'homepage',
    component: HomepageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
