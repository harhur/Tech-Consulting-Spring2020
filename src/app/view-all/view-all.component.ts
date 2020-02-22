import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})

export class ViewAllComponent implements OnInit {
  jsonString: any;
  carArray: any;
  constructor() {
    this.jsonString = JSON.stringify(dummyData);
    this.carArray = JSON.parse(this.jsonString);
    console.log(this.carArray[0].lastUpdated);

    this.carArray.sort((a,b) => a.vin - b.vin);

    console.log(this.carArray[0].vin);
  }

  ngOnInit() {

  }



}
