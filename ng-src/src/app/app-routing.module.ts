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
    },
    {
      path: 'signup', loadChildren: () => import('./shared/signup/signup.module').then(m => m.SignupModule)
    },
    {
      path: 'login', loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'about_us', loadChildren: () => import('./shared/about-us/about-us.module').then(m => m.AboutUsModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
