import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})

export class RecentlyAddedComponent implements OnInit {
  jsonString: any;
  carArray: any;
  constructor() {
    this.jsonString = JSON.stringify(dummyData);
    this.carArray = JSON.parse(this.jsonString);
    console.log(this.carArray[0].lastUpdated);

    this.carArray.sort(function compare(a, b) {
      var addedA = new Date(a.dateAdded);
      var addedB = new Date(b.dateAdded);
      return +addedA - +addedB;
    });

    console.log(this.carArray[0].dateAdded);
  }

  ngOnInit() {

  }



}
