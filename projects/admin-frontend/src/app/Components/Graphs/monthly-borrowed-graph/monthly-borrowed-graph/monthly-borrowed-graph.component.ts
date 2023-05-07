import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'admin-monthly-borrowed-graph',
  templateUrl: './monthly-borrowed-graph.component.html',
  styleUrls: ['./monthly-borrowed-graph.component.scss']
})
export class MonthlyBorrowedGraphComponent implements OnInit  {

  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Anzahl';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  ngOnInit(): void {}

  constructor() {
    Object.assign(this, { null });
  }

  public onSelect(): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(null)));
  }

  public onActivate(): void {
    console.log('Activate', JSON.parse(JSON.stringify(null)));
  }

  public onDeactivate(): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(null)));
  }
}
