import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import * as moment from 'moment';
import { Refueling } from 'model/refueling';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent{
  public fuelChart?: Chart;

  @Input()
  public refuelings: Refueling[] = [];

  ngOnInit() {
    this.fuelChart = new Chart('fuelChart', {
      type: 'line',
      data: {
        labels: this.refuelings.map(x => moment(x.toDate).format('DD MMM YYYY')),
        datasets: [
          {
            label: 'Km/l',
            data: this.refuelings.map(y => y.kmToLt)
          }
        ]
      }
    })
  }
}