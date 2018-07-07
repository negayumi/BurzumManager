// Core components
import{ Injectable } from '@angular/core';
import{ Http } from '@angular/http';

//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { BlizzardApiCharacter } from '../models/blizzardapi-character.model';

@Injectable()
export class BlizzardApiService{

    private baseCharacterUrl:string = 'https://eu.api.battle.net/wow/character/';
    private baseGuildUrl: string = 'https://eu.api.battle.net/wow/guild/';
    private apiKey: string = 'parv8c9epdb4kt4hadkzct348dufea48';
    constructor(private http: Http){

    }

    public getSpecificCharacterData(characterName, realm): Promise<BlizzardApiCharacter>{
      	const url = this.baseCharacterUrl + realm + "/" + characterName + "?" + "locale=fr_FR&apikey=" + this.apiKey;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue '  + error))
    }

    public getGuildData(){

    }
}
