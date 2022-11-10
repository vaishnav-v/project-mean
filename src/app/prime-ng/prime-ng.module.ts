import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';


const PrimeNgModules = 
[ 
  ButtonModule,PanelMenuModule,MenuModule
]

@NgModule({
  imports: [PrimeNgModules],
  exports:[PrimeNgModules]
})
export class PrimeNgModule { }
