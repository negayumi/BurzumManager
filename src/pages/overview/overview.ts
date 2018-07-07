import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  /*loadGuildCharacters(){
    this.http.get('https://eu.api.battle.net/wow/guild/Krasus/Burzum?fields=members&locale=fr_FR&apikey=parv8c9epdb4kt4hadkzct348dufea48')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.members;
        console.log(data.members);
      },err => {
        console.log(err);
      });
  }*/

  ionViewDidLoad() {
    //this.loadGuildCharacters();
  }

}
