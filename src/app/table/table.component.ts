import { Component, Input } from '@angular/core';
import Refueling from 'model/refueling';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  public refuelings: Refueling[] = [];
  public displayColumns = [
      'toDate', 
      'fromKm', 
      'toKm', 
      'partialKm', 
      'fuelLt', 
      'fuelCost', 
      'eurToLt', 
      'kmToLt', 
      'eurToKm', 
      'dailyKm', 
      'dailyCost'
    ];
}