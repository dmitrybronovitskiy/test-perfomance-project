import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  date: string,
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', date: moment().format('MMMM Do YYYY, h:mm:ss a')},
];

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'date'];
  dataSource = ELEMENT_DATA;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  range = new FormGroup({
    start: new FormControl(''),
    end: new FormControl(''),
  });
  toppings = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
