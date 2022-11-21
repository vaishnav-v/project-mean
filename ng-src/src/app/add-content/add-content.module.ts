import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {DialogModule} from 'primeng/dialog';


import { AddContentRoutingModule } from './add-content-routing.module';
import { AddContentComponent } from './add-content.component';
import { ArticleService } from '../shared/services/article.service';


@NgModule({
  declarations: [
    AddContentComponent
  ],
  imports: [
    CommonModule,
    AddContentRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    PrimeNgModule,
    DialogModule
  ],
  providers: [ArticleService]
})
export class AddContentModule { }
