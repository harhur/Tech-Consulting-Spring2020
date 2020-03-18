import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

export interface Car {
  carId: number;
  dateAdded: string;
  color: string;
  price: number;
  vin: number;
  lastUpdated: string;
  year: number;
  model: string;
  make: string;
  plantId: number;
  starred: boolean;
}

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})

export class RecentlyAddedComponent implements OnInit {
  jsonString: any;
  carArray: Car[];
  displayedColumns: string[] = ['carId', 'model', 'dateAdded'];
  dataSource: any;

  constructor(private router: Router) {
    this.jsonString = JSON.stringify(dummyData);
    this.carArray = JSON.parse(this.jsonString);

    this.carArray.sort(function compare(a, b) {
      var addedA = new Date(a.dateAdded);
      var addedB = new Date(b.dateAdded);
      return +addedA - +addedB;
    });

    this.dataSource = new MatTableDataSource(this.carArray);
  }

  ngOnInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(row) {
    console.log(row.carId);
    console.log(this.router.url);
    this.router.navigate(['./car'],  {queryParams: {id: row.carId}});
  }


}
