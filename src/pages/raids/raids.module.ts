import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaidsPage } from './raids';

@NgModule({
  declarations: [
    RaidsPage,
  ],
  imports: [
    IonicPageModule.forChild(RaidsPage),
  ],
})
export class RaidsPageModule {}
