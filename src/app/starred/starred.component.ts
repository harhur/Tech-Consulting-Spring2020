import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})

export class starredcomponent implements OnInit {
  jsonString: any;
  starredArray: any;
  constructor() {
    /**
    *this.jsonString = JSON.stringify(dummyData);
        this.starredArray = JSON.parse(this.jsonString);
    */

    console.log(this.starredArray[0].starred);

  
  }

  ngOnInit() {

  }
}
