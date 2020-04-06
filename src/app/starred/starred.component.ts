import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})

export class StarredComponent implements OnInit {
  starredArray: any;
  displayedColumns: string[] = ['carId', 'model', 'dateAdded'];
  dataSource: any;

  constructor(private router: Router, private carService: CarsService) {
    this.carService.getCars().subscribe(carArray => this.starredArray = carArray.filter(function(carArray) {
      return carArray.starred;
    }))

    this.dataSource = new MatTableDataSource(this.starredArray);

  }

  ngOnInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(row) {
    this.router.navigate(['./car'],  {queryParams: {id: row.carId}});
  }


}
