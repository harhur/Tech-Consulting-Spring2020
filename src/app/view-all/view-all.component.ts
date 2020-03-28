import { Component, OnInit } from '@angular/core';
import dummyData from '../../assets/dummyData.json';
import {Car} from '../app.component';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})

export class ViewAllComponent implements OnInit {
  jsonString: any;
  carArray: Car[];
  displayedColumns: string[] = ['carId', 'model', 'dateAdded'];
  dataSource: any;

  constructor(private router: Router) {
    this.jsonString = JSON.stringify(dummyData);
    this.carArray = JSON.parse(this.jsonString);

    this.carArray.sort((a, b) => a.carId - b.carId);

    this.dataSource = new MatTableDataSource(this.carArray);
  }

  ngOnInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(row) {
    this.router.navigate(['./car'],  {queryParams: {id: row.carId}});
  }
}
