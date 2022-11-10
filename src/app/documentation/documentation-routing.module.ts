import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes =
  [
    {
      path: '',
      component: DocumentationComponent,
      children:
        [
          {
            path: '',
            redirectTo: 'start',
            pathMatch: 'full'
          },
          {
            path: ':id',
            component: ArticleComponent
          }
        ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
