import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  pieChartData = new EventEmitter<any>();

  constructor() { }
}
