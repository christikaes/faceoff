import { Component, OnInit } from '@angular/core';
import { FunnyFacesService } from '../shared';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export interface CurrentFunnyFace {
  url: string;
}


@Component({
  selector: 'my-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  private imagesRef: any;
  private _randomFunnyFaceUrl: Subject<CurrentFunnyFace> = new Subject<CurrentFunnyFace>();;
  public currentFunnyFaceUrl: Observable<CurrentFunnyFace> = this._randomFunnyFaceUrl.asObservable();
  private _currentFunnyFaceUrl: string;

  constructor(private funnyFacesService: FunnyFacesService) {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storage = firebase.storage();

    // Create a storage reference from our storage service
    const storageRef = storage.ref();

    // Create a child reference
    this.imagesRef = storageRef.child('FunnyFaces');
    // imagesRef now points to 'FunnyFaces'

    // Initialize loading faces:
    this._currentFunnyFaceUrl = "http://www.myconfinedspace.com/wp-content/uploads/2016/04/loading.gif";
  }

  getRandomFunnyFace() {
    // Random number between 1-4
    var rand = Math.floor(Math.random() * 4) + 1

    var me = this;
    this.imagesRef.child(rand + ".jpg").getDownloadURL().then(function(url) {
      // Get the download URL for 'images/stars.jpg'
      // This can be inserted into an <img> tag
      // This can also be downloaded directly
      me._randomFunnyFaceUrl.next({url: url});
    }).catch(function(error) {
      // Handle any errors
      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
      this._randomFunnyFaceUrl.next({url: "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/error.png"});
    });
  }

  ngOnInit() {
    console.log('Hello Game');
    this.getRandomFunnyFace()
    this.currentFunnyFaceUrl.subscribe(res => {
      this._currentFunnyFaceUrl = res.url;
      console.log(res.url)
    });
  }

}
