import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';


const PrimeNgModules = 
[ 
  ButtonModule,PanelMenuModule,MenuModule,CardModule,RippleModule,SidebarModule
]

@NgModule({
  imports: [PrimeNgModules],
  exports:[PrimeNgModules]
})
export class PrimeNgModule { }
