import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BlizzardApiService } from '../../services/blizzardapi.service';
import { BlizzardApiCharacter } from '../../models/blizzardapi-character.model';
/**
 * Generated class for the AddrosterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addroster',
  templateUrl: 'addroster.html',
})
export class AddrosterPage {

  characterName: string;
  realm: string;
  character: BlizzardApiCharacter = new BlizzardApiCharacter;

  constructor(public navCtrl: NavController, public navParams: NavParams, private blizzardApiService: BlizzardApiService) {
  }


  private searchCharacter(){
    this.blizzardApiService.getSpecificCharacterData(this.characterName, this.realm)
    .then(characterFetched => {
      this.character = characterFetched;
      console.log(this.character);
    });
    this.displayResult();
  }

  private displayResult(){
    document.getElementById("result").removeAttribute("hidden");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddrosterPage');
  }

}
