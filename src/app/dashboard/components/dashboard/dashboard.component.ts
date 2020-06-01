import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Covid19dataService } from 'src/app/services/covid19data.service';
import { Observable, interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { EventService } from 'src/app/services/event.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  globalcases: any;
  lankancases: any;

  global_confirmed: number;
  global_recovered: number;
  global_deaths: number;
  new_global_confirmed: number;
  new_global_recovered: number;
  new_global_deaths: number;

  lk_confirmed: number;
  lk_recovered: number;
  lk_deaths: number;
  new_lk_confirmed: number;
  new_lk_recovered: number;
  new_lk_deaths: number;

  globaldata : any;
  lankadata : any;

  // globaldata: any = [{
  //   name: 'Active',
  //   y: 40
  // },
  // {
  //   name: 'Recovered',
  //   y: 30
  // }, {
  //   name: 'Deaths',
  //   y: 30
  // }];

  // lankadata = [{
  //   y: 70,
  //   name: 'Active'
  // },
  // {
  //   y: 25,
  //   name: 'Recovered'
  // },
  // {
  //   y: 5,
  //   name: 'Deaths'
  // }]

  slCases_timeseries: any;

  constructor(private _dataServiceCovid19: Covid19dataService, private _eventService: EventService) { }

  ngOnInit(): void {
    this.loadSummaryData();
    // this.loadCasebyCaseDataForSL();
  }

  // loadCasebyCaseDataForSL() {
  //   interval(1000 * 60 * 60).pipe(startWith(0)).subscribe(x => {
  //     this._dataServiceCovid19.getCaseByCaseDataForSL().subscribe(data => {
  //       this.slCases_timeseries = data;

  //       //To DO
  //       // Loop through this object and build the "Categories" and "series" data arrays for the area chart
  //       // Pass these in ann input variable to the chart component
  //       // These data are updated daily though, so you won't see this as real time eventhough an API call is made every hour

  //       console.log(this.slCases_timeseries);
  //     });
  //   });
  // }

  loadSummaryData() {
    interval(10000).pipe(startWith(0))
      .subscribe(
        x => {
          this._dataServiceCovid19.getSummary().subscribe(data => {

            this.globalcases = data.Global;
            this.lankancases = data.Countries.find(x => x.CountryCode == 'LK');

            this.global_confirmed = data.Global.TotalConfirmed;
            this.global_recovered = data.Global.TotalRecovered;
            this.global_deaths = data.Global.TotalDeaths;

            this.new_global_confirmed = data.Global.NewConfirmed;
            this.new_global_recovered = data.Global.NewRecovered;
            this.new_global_deaths = data.Global.NewDeaths;

            this.lk_confirmed = this.lankancases.TotalConfirmed;
            this.lk_recovered = this.lankancases.TotalRecovered;
            this.lk_deaths = this.lankancases.TotalDeaths;

            this.new_lk_confirmed = this.lankancases.NewConfirmed;
            this.new_lk_recovered = this.lankancases.NewRecovered;
            this.new_lk_deaths = this.lankancases.NewDeaths;


            this.globaldata = [{
              y: this.global_confirmed - (this.global_deaths + this.global_recovered),
              name: 'Active',
              selected: true
            },
            {
              y: this.global_recovered,
              name: 'Recovered'
            },
            {
              y: this.global_deaths,
              name: 'Deaths'

            }]

            this.lankadata = [{
              y: this.lk_confirmed - (this.lk_deaths + this.lk_recovered),
              name: 'Active'
              
            },
            {
              y: this.lk_recovered,
              name: 'Recovered'
            },
            {
              y: this.lk_deaths,
              name: 'Deaths'

            }]

            // console.log(this.globalcases);
            // console.log(this.lankancases);
          });
        }
      );

  }

  //Should replade these data with API data, but the chart is dynamic now
  //Whehn you call the API you have to build this data structure dynamically when you subscribe the API call here



  
}
