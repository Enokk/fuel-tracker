import { Component } from '@angular/core';
import { Refueling } from 'src/model/refueling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected dummyData = [
    new Refueling(new Date('04/03/2023'), new Date('06/08/2023'), 134433, 135124, 45.72, 81.79),
    new Refueling(new Date('06/08/2023'), new Date('06/19/2023'), 135124, 135562, 27.52, 49.23),
    new Refueling(new Date('06/19/2023'), new Date('07/06/2023'), 135562, 135980, 27.91, 49.62),
    new Refueling(new Date('07/06/2023'), new Date('07/17/2023'), 135980, 136850, 52.12, 93.76),
    new Refueling(new Date('07/17/2023'), new Date('07/24/2023'), 136850, 137521, 42.04, 76.47)
  ]
}
