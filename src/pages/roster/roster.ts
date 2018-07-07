import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddrosterPage } from '../addroster/addroster';

@IonicPage()
@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html',
})
export class RosterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private addRoster(){
    this.navCtrl.push(AddrosterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RosterPage');
  }

}
