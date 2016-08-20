import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Rooms');
  }

}
