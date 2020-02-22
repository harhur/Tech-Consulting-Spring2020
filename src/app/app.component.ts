import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'sogo-services';
  constructor(private appService:AppService){}

  jsonData = [
      {
          "dateAdded": "2018-1-22",
          "carId": 0,
          "color": "green",
          "price": 53300,
          "vin": 500473911531,
          "lastUpdated": "2017-7-12 16:18:27",
          "year": 2013,
          "model": "Mustang",
          "make": "Ford",
          "plantId": 1,
          "starred": true
      },
      {
          "dateAdded": "2016-6-22",
          "carId": 1,
          "color": "pink",
          "price": 19416,
          "vin": 504096604206,
          "lastUpdated": "2018-10-14 14:28:5",
          "year": 2017,
          "model": "Grand Cherokee",
          "make": "Cadillac",
          "plantId": 5,
          "starred": false
      },
      {
          "dateAdded": "2018-7-25",
          "carId": 2,
          "color": "purple",
          "price": 50149,
          "vin": 1221647654720,
          "lastUpdated": "2016-9-2 0:2:6",
          "year": 1996,
          "model": "Mustang",
          "make": "Tesla",
          "plantId": 5,
          "starred": false
      },
      {
          "dateAdded": "2017-2-28",
          "carId": 3,
          "color": "purple",
          "price": 17044,
          "vin": 1573779961447,
          "lastUpdated": "2018-9-21 18:3:37",
          "year": 1998,
          "model": "Mustang",
          "make": "Jeep",
          "plantId": 14,
          "starred": true
      },
      {
          "dateAdded": "2018-1-10",
          "carId": 4,
          "color": "black",
          "price": 75277,
          "vin": 465881630666,
          "lastUpdated": "2019-1-1 8:27:22",
          "year": 2000,
          "model": "Encore",
          "make": "Cadillac",
          "plantId": 1,
          "starred": false
      },
      {
          "dateAdded": "2017-3-18",
          "carId": 5,
          "color": "silver",
          "price": 4697,
          "vin": 1522478144532,
          "lastUpdated": "2019-4-3 20:28:19",
          "year": 1996,
          "model": "Model 3",
          "make": "Buick",
          "plantId": 11,
          "starred": true
      },
      {
          "dateAdded": "2016-8-8",
          "carId": 6,
          "color": "red",
          "price": 16486,
          "vin": 198097610569,
          "lastUpdated": "2016-4-5 8:30:2",
          "year": 2016,
          "model": "Grand Cherokee",
          "make": "Ford",
          "plantId": 14,
          "starred": false
      },
      {
          "dateAdded": "2016-1-29",
          "carId": 7,
          "color": "brown",
          "price": 73590,
          "vin": 345455106537,
          "lastUpdated": "2017-11-12 21:11:34",
          "year": 1996,
          "model": "Encore",
          "make": "Buick",
          "plantId": 2,
          "starred": false
      },
      {
          "dateAdded": "2018-10-25",
          "carId": 8,
          "color": "red",
          "price": 50471,
          "vin": 888303741331,
          "lastUpdated": "2016-6-20 6:17:17",
          "year": 2000,
          "model": "Enclave",
          "make": "Jeep",
          "plantId": 9,
          "starred": false
      },
      {
          "dateAdded": "2018-3-12",
          "carId": 9,
          "color": "brown",
          "price": 13425,
          "vin": 1393584259720,
          "lastUpdated": "2017-8-19 1:25:51",
          "year": 2014,
          "model": "Model X",
          "make": "Ford",
          "plantId": 1,
          "starred": true
      },
      {
          "dateAdded": "2016-6-4",
          "carId": 10,
          "color": "black",
          "price": 79886,
          "vin": 1142228857046,
          "lastUpdated": "2018-10-4 4:7:11",
          "year": 2007,
          "model": "Wrangler",
          "make": "Cadillac",
          "plantId": 15,
          "starred": true
      },
      {
          "dateAdded": "2018-2-29",
          "carId": 11,
          "color": "pink",
          "price": 85035,
          "vin": 1358544223506,
          "lastUpdated": "2017-5-8 21:1:3",
          "year": 2018,
          "model": "Encore",
          "make": "Tesla",
          "plantId": 3,
          "starred": true
      },
      {
          "dateAdded": "2019-8-15",
          "carId": 12,
          "color": "green",
          "price": 98555,
          "vin": 621419093548,
          "lastUpdated": "2018-11-1 21:47:31",
          "year": 2018,
          "model": "Grand Cherokee",
          "make": "Buick",
          "plantId": 4,
          "starred": true
      },
      {
          "dateAdded": "2019-7-1",
          "carId": 13,
          "color": "pink",
          "price": 77302,
          "vin": 1697703109712,
          "lastUpdated": "2017-4-14 20:6:9",
          "year": 2018,
          "model": "Grand Cherokee",
          "make": "Cadillac",
          "plantId": 5,
          "starred": true
      },
      {
          "dateAdded": "2019-10-1",
          "carId": 14,
          "color": "black",
          "price": 97306,
          "vin": 589894997279,
          "lastUpdated": "2019-11-21 13:1:23",
          "year": 2007,
          "model": "Grand Cherokee",
          "make": "Buick",
          "plantId": 7,
          "starred": true
      },
      {
          "dateAdded": "2019-9-23",
          "carId": 15,
          "color": "black",
          "price": 27991,
          "vin": 572325928153,
          "lastUpdated": "2018-10-2 15:20:23",
          "year": 1997,
          "model": "Mustang",
          "make": "Buick",
          "plantId": 7,
          "starred": true
      },
      {
          "dateAdded": "2016-5-1",
          "carId": 16,
          "color": "green",
          "price": 17285,
          "vin": 1685298915748,
          "lastUpdated": "2019-5-18 8:31:12",
          "year": 2005,
          "model": "Model X",
          "make": "Ford",
          "plantId": 2,
          "starred": true
      },
      {
          "dateAdded": "2018-7-27",
          "carId": 17,
          "color": "purple",
          "price": 59582,
          "vin": 1348543491753,
          "lastUpdated": "2016-4-16 1:17:12",
          "year": 2016,
          "model": "Wrangler",
          "make": "Buick",
          "plantId": 15,
          "starred": false
      },
      {
          "dateAdded": "2018-7-9",
          "carId": 18,
          "color": "pink",
          "price": 22264,
          "vin": 213970047538,
          "lastUpdated": "2019-9-10 11:15:18",
          "year": 2016,
          "model": "Enclave",
          "make": "Jeep",
          "plantId": 4,
          "starred": false
      },
      {
          "dateAdded": "2017-1-21",
          "carId": 19,
          "color": "black",
          "price": 11239,
          "vin": 1073304477746,
          "lastUpdated": "2018-1-23 17:58:45",
          "year": 2006,
          "model": "Encore",
          "make": "Jeep",
          "plantId": 1,
          "starred": false
      },
      {
          "dateAdded": "2017-4-27",
          "carId": 20,
          "color": "blue",
          "price": 92602,
          "vin": 1628925320929,
          "lastUpdated": "2018-1-28 10:26:7",
          "year": 2011,
          "model": "Wrangler",
          "make": "Jeep",
          "plantId": 14,
          "starred": false
      },
      {
          "dateAdded": "2017-2-29",
          "carId": 21,
          "color": "silver",
          "price": 78625,
          "vin": 1029419467311,
          "lastUpdated": "2017-3-12 6:33:45",
          "year": 1996,
          "model": "Enclave",
          "make": "Jeep",
          "plantId": 7,
          "starred": false
      },
      {
          "dateAdded": "2019-10-10",
          "carId": 22,
          "color": "green",
          "price": 14011,
          "vin": 1874707173221,
          "lastUpdated": "2018-5-19 20:6:42",
          "year": 2018,
          "model": "Mustang",
          "make": "Buick",
          "plantId": 13,
          "starred": false
      },
      {
          "dateAdded": "2019-1-15",
          "carId": 23,
          "color": "blue",
          "price": 91379,
          "vin": 902771113814,
          "lastUpdated": "2017-2-7 3:24:21",
          "year": 2008,
          "model": "Grand Cherokee",
          "make": "Ford",
          "plantId": 2,
          "starred": true
      },
      {
          "dateAdded": "2016-6-27",
          "carId": 24,
          "color": "blue",
          "price": 36964,
          "vin": 700196103237,
          "lastUpdated": "2016-9-5 22:2:50",
          "year": 2016,
          "model": "Grand Cherokee",
          "make": "Tesla",
          "plantId": 3,
          "starred": false
      },
      {
          "dateAdded": "2018-5-3",
          "carId": 25,
          "color": "blue",
          "price": 25476,
          "vin": 1714771323282,
          "lastUpdated": "2017-9-17 6:8:22",
          "year": 1995,
          "model": "Grand Cherokee",
          "make": "Jeep",
          "plantId": 9,
          "starred": false
      },
      {
          "dateAdded": "2017-9-4",
          "carId": 26,
          "color": "green",
          "price": 39350,
          "vin": 1851277054960,
          "lastUpdated": "2017-6-2 4:16:19",
          "year": 1996,
          "model": "Model 3",
          "make": "Buick",
          "plantId": 7,
          "starred": true
      },
      {
          "dateAdded": "2018-9-2",
          "carId": 27,
          "color": "pink",
          "price": 46800,
          "vin": 1098858051789,
          "lastUpdated": "2019-6-11 8:3:0",
          "year": 2018,
          "model": "Model X",
          "make": "Tesla",
          "plantId": 2,
          "starred": false
      },
      {
          "dateAdded": "2016-6-27",
          "carId": 28,
          "color": "silver",
          "price": 15921,
          "vin": 649158209834,
          "lastUpdated": "2018-1-19 15:20:23",
          "year": 2006,
          "model": "Wrangler",
          "make": "Buick",
          "plantId": 10,
          "starred": false
      },
      {
          "dateAdded": "2019-1-5",
          "carId": 29,
          "color": "green",
          "price": 74089,
          "vin": 1578466355797,
          "lastUpdated": "2018-11-22 21:56:48",
          "year": 1999,
          "model": "Model 3",
          "make": "Buick",
          "plantId": 12,
          "starred": false
      },
      {
          "dateAdded": "2018-9-7",
          "carId": 30,
          "color": "black",
          "price": 61377,
          "vin": 588033031765,
          "lastUpdated": "2018-11-27 13:38:12",
          "year": 2010,
          "model": "Grand Cherokee",
          "make": "Cadillac",
          "plantId": 5,
          "starred": false
      },
      {
          "dateAdded": "2019-5-29",
          "carId": 31,
          "color": "blue",
          "price": 25645,
          "vin": 1711433727263,
          "lastUpdated": "2016-11-14 15:41:29",
          "year": 1998,
          "model": "Model 3",
          "make": "Jeep",
          "plantId": 15,
          "starred": false
      },
      {
          "dateAdded": "2018-11-13",
          "carId": 32,
          "color": "blue",
          "price": 82792,
          "vin": 645028620620,
          "lastUpdated": "2016-8-15 14:25:7",
          "year": 2014,
          "model": "Encore",
          "make": "Jeep",
          "plantId": 9,
          "starred": true
      },
      {
          "dateAdded": "2019-9-3",
          "carId": 33,
          "color": "silver",
          "price": 90791,
          "vin": 995339365559,
          "lastUpdated": "2019-4-4 10:1:5",
          "year": 1999,
          "model": "Enclave",
          "make": "Buick",
          "plantId": 13,
          "starred": false
      },
      {
          "dateAdded": "2017-3-22",
          "carId": 34,
          "color": "red",
          "price": 20337,
          "vin": 1838007349919,
          "lastUpdated": "2019-8-8 19:12:40",
          "year": 2004,
          "model": "Model X",
          "make": "Ford",
          "plantId": 4,
          "starred": true
      },
      {
          "dateAdded": "2016-11-2",
          "carId": 35,
          "color": "blue",
          "price": 97089,
          "vin": 512974151765,
          "lastUpdated": "2016-2-1 8:34:52",
          "year": 2002,
          "model": "Grand Cherokee",
          "make": "Ford",
          "plantId": 6,
          "starred": true
      },
      {
          "dateAdded": "2016-9-23",
          "carId": 36,
          "color": "purple",
          "price": 29662,
          "vin": 964207016015,
          "lastUpdated": "2018-5-19 18:46:45",
          "year": 2016,
          "model": "Model X",
          "make": "Cadillac",
          "plantId": 12,
          "starred": true
      },
      {
          "dateAdded": "2016-4-20",
          "carId": 37,
          "color": "pink",
          "price": 72214,
          "vin": 509348290090,
          "lastUpdated": "2018-6-1 12:19:54",
          "year": 2014,
          "model": "Enclave",
          "make": "Buick",
          "plantId": 13,
          "starred": false
      },
      {
          "dateAdded": "2016-7-13",
          "carId": 38,
          "color": "silver",
          "price": 65800,
          "vin": 18515148577,
          "lastUpdated": "2016-4-15 11:54:16",
          "year": 2018,
          "model": "Model X",
          "make": "Jeep",
          "plantId": 1,
          "starred": true
      },
      {
          "dateAdded": "2016-2-22",
          "carId": 39,
          "color": "blue",
          "price": 72615,
          "vin": 345477209694,
          "lastUpdated": "2019-6-22 20:53:58",
          "year": 2000,
          "model": "Model 3",
          "make": "Tesla",
          "plantId": 4,
          "starred": false
      },
      {
          "dateAdded": "2018-3-13",
          "carId": 40,
          "color": "blue",
          "price": 74984,
          "vin": 761174635672,
          "lastUpdated": "2017-7-29 5:19:19",
          "year": 2006,
          "model": "Grand Cherokee",
          "make": "Cadillac",
          "plantId": 13,
          "starred": true
      },
      {
          "dateAdded": "2016-6-2",
          "carId": 41,
          "color": "silver",
          "price": 11352,
          "vin": 1246638158209,
          "lastUpdated": "2018-1-20 15:5:46",
          "year": 2017,
          "model": "Grand Cherokee",
          "make": "Jeep",
          "plantId": 13,
          "starred": true
      },
      {
          "dateAdded": "2016-7-10",
          "carId": 42,
          "color": "brown",
          "price": 70750,
          "vin": 1795150885757,
          "lastUpdated": "2018-9-12 0:55:47",
          "year": 2007,
          "model": "Mustang",
          "make": "Tesla",
          "plantId": 14,
          "starred": true
      },
      {
          "dateAdded": "2018-4-17",
          "carId": 43,
          "color": "purple",
          "price": 39077,
          "vin": 1467735514485,
          "lastUpdated": "2018-6-24 7:12:40",
          "year": 2003,
          "model": "Model 3",
          "make": "Buick",
          "plantId": 1,
          "starred": false
      },
      {
          "dateAdded": "2017-2-16",
          "carId": 44,
          "color": "purple",
          "price": 87370,
          "vin": 179986447055,
          "lastUpdated": "2018-10-28 16:43:32",
          "year": 1997,
          "model": "Encore",
          "make": "Cadillac",
          "plantId": 5,
          "starred": false
      },
      {
          "dateAdded": "2018-5-12",
          "carId": 45,
          "color": "purple",
          "price": 61432,
          "vin": 1597647150316,
          "lastUpdated": "2019-10-10 19:55:50",
          "year": 1995,
          "model": "Model 3",
          "make": "Jeep",
          "plantId": 7,
          "starred": false
      },
      {
          "dateAdded": "2016-8-15",
          "carId": 46,
          "color": "red",
          "price": 35744,
          "vin": 387938265253,
          "lastUpdated": "2018-3-10 11:10:7",
          "year": 2006,
          "model": "Enclave",
          "make": "Ford",
          "plantId": 8,
          "starred": true
      },
      {
          "dateAdded": "2016-3-19",
          "carId": 47,
          "color": "pink",
          "price": 20514,
          "vin": 606739819361,
          "lastUpdated": "2017-9-14 4:25:9",
          "year": 1997,
          "model": "Model X",
          "make": "Ford",
          "plantId": 11,
          "starred": false
      },
      {
          "dateAdded": "2017-6-27",
          "carId": 48,
          "color": "pink",
          "price": 55714,
          "vin": 488881874305,
          "lastUpdated": "2017-2-8 14:15:7",
          "year": 2006,
          "model": "Model X",
          "make": "Tesla",
          "plantId": 5,
          "starred": false
      },
      {
          "dateAdded": "2019-4-29",
          "carId": 49,
          "color": "silver",
          "price": 32331,
          "vin": 92386141303,
          "lastUpdated": "2019-7-21 22:15:19",
          "year": 2013,
          "model": "Enclave",
          "make": "Cadillac",
          "plantId": 14,
          "starred": false
      }
  ];

  download(){
    this.appService.downloadFile(this.jsonData, 'jsontocsv');
  }
}