import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})

export class StarredComponent implements OnInit {
  jsonString: any;
  starredArray: any;

  constructor() {
    this.jsonString = JSON.stringify(dummyData);
    this.starredArray = JSON.parse(this.jsonString);

    this.starredArray = this.starredArray.filter(function(arr) {
          return arr.starred;
      });

      console.log(this.starredArray);

  }

  ngOnInit() {

  }
}
