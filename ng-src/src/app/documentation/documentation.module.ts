import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from '../shared/services/article.service';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    DocumentationComponent,
    NavbarLeftComponent,
    ArticleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    PrimeNgModule
  ],
  providers: [ArticleService]
})
export class DocumentationModule { }
