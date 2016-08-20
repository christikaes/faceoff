import { Injectable } from '@angular/core';

@Injectable()
export class FunnyFacesService {
  public getFunnyFace;

  constructor() {
    // get a random funny face image url
    this.getFunnyFace = function(){
        console.log("FUNNY FACE SERVICE")
        return "a";
    }
  }
}
