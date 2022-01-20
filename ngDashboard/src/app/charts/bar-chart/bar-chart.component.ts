import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65,59,23,93,50,30,12], label: "Q3 Sales"},
  { data: [65,39,53,91,50,30,19], label: "Q4 Sales"}
];
const SAMPLE_BARCHART_LABELS: string[] = ["W1", "W2", "W3","W4","W5","W6","W7"]

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  barChartData: any[] = SAMPLE_BARCHART_DATA;
  barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLegend: boolean = true;
  barChartType: string = "bar";

  constructor() { }

  ngOnInit() {

  }

}
