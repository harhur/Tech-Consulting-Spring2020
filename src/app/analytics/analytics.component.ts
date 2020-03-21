import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';
import {MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
    totalCars: any;
    carsAddedMonth: any;
    dataArray: number[];
    dataSource: any;
    displayedColumns: string[] = ['totalCars', 'carsAddedMonth'];

    constructor() {
      // Hardcoded numbers for now -Byron
      this.totalCars = 253;
      this.carsAddedMonth = 33;
      this.dataArray = [this.totalCars, this.carsAddedMonth];
      this.dataSource = new MatTableDataSource(this.dataArray);
    }

    ngOnInit() {}

    // PUT ANALYTICS METHODS INSIDE HERE

}
