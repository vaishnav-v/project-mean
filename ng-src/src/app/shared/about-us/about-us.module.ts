import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SplitterModule,
    CardModule,
  ]
})
export class AboutUsModule { }
