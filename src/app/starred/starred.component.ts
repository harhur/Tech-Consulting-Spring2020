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
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})

export class StarredComponent implements OnInit {
  jsonString: any;
  starredArray: any;
  displayedColumns: string[] = ['carId', 'model', 'dateAdded'];
  dataSource: any;

  constructor(private router: Router) {
    this.jsonString = JSON.stringify(dummyData);
    this.starredArray = JSON.parse(this.jsonString);

    this.starredArray = this.starredArray.filter(function(arr) {
          return arr.starred;
      });

      this.dataSource = new MatTableDataSource(this.starredArray);

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
