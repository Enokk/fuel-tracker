import { Component } from '@angular/core';
import { Refueling } from 'model/refueling';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected title = 'Fuel Tracker';
  protected refuelings: Refueling[] = [];
  protected isDataAvailable?: Promise<boolean>;
  
  constructor(
    private http: HttpClient,
  ) {}
  
  ngOnInit() {
    this.http.get<Refueling[]>('http://localhost:3001/api/refuelings')
      .subscribe(result => {
        this.refuelings = result
          .map(x => new Refueling(new Date(x.fromDate), new Date(x.toDate), x.fromKm, x.toKm, x.fuelLt, x.fuelCost))
          .sort((a, b) => a.fromDate.getTime() - b.fromDate.getTime());
        this.isDataAvailable = Promise.resolve(true);
      });
  }
}
