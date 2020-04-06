import { Component, OnInit } from '@angular/core';
import {Car} from '../app.component';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})

export class ViewAllComponent implements OnInit {
  carArray: Car[];
  displayedColumns: string[] = ['carId', 'model', 'dateAdded'];
  dataSource: any;

  constructor(private router: Router, private carService: CarsService) {
    this.carService.getCars().subscribe(carArray => this.carArray = carArray);

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
