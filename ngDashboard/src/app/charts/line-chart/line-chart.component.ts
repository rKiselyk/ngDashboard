import { Component, OnInit } from '@angular/core';

const SAMPLE_LINECHART_DATA: any[] = [
  { data: [65,59,23,93,50,30,12], label: "SA"},
  { data: [66,29,53,91,50,30,19], label: "IR"},
  { data: [45,39,43,92,39,20,10], label: "F"}
];
const SAMPLE_LINECHART_LABELS: string[] = ["W1", "W2", "W3","W4","W5","W6","W7"]

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData: any[] = SAMPLE_LINECHART_DATA;
  lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  lineChartColors: any[] = [
    { backgroundColor: "#26547c", borderColor: "#111", pointBackgroundColor: "#000", pointBorderColor: "#000", pointHoverBackgroundColor: "#555", pointHoverBorderColor: "#555"  },
    { backgroundColor: "#ff6b6b", borderColor: "#111", pointBackgroundColor: "#000", pointBorderColor: "#000", pointHoverBackgroundColor: "#555", pointHoverBorderColor: "#555" },
    { backgroundColor: "#ffd166", borderColor: "#111", pointBackgroundColor: "#000", pointBorderColor: "#000", pointHoverBackgroundColor: "#555", pointHoverBorderColor: "#555" }
  ];
  lineChartLegend: boolean = true;
  lineChartType: string = "line";

  constructor() { }

  ngOnInit() {
  }

}
