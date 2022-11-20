import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';

const PrimeNgModules = 
[ 
  ButtonModule,PanelMenuModule,MenuModule,CardModule,RippleModule
]

@NgModule({
  imports: [PrimeNgModules],
  exports:[PrimeNgModules]
})
export class PrimeNgModule { }
