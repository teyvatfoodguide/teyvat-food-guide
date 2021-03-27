import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component'; 
import { TabComponent } from './tab.component';

@NgModule({
  imports:[
    CommonModule
  ],
  declarations: [
    TabComponent,
    TabsComponent
  ],
  exports: [
    TabComponent,
    TabsComponent,

  ]
})
export class TabModule { }
