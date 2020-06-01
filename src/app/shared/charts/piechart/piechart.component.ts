import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EventService } from 'src/app/services/event.service';

@Component({
    selector: 'pie-chart',
    templateUrl: './piechart.component.html',
    styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit, OnChanges {

    chartOptions: {};
    Highcharts = Highcharts;

    @Input() title: string = "Global Cases"
    @Input() chartData: any

    constructor(private _eventService: EventService) { }

    ngOnInit(): void {
        this.buildChart();
    }

    ngOnChanges(): void {
        this.buildChart();
    }

    buildChart() {

        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',

            },
            title: {
                text: this.title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            credits: {
                enabled: false
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Cases',
                colorByPoint: true,
                innerSize : '50%',
                data: this.chartData
            }]
        };
    }

}
