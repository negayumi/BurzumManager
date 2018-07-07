import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddrosterPage } from './addroster';

@NgModule({
  declarations: [
    AddrosterPage,
  ],
  imports: [
    IonicPageModule.forChild(AddrosterPage),
  ],
})
export class AddrosterPageModule {}
