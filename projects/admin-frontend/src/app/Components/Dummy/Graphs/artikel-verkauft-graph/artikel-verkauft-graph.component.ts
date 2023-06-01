import { AnalyticItemMonth } from './../../../../../../../automat-api/src/API/models/analytic-item-month';
import { Component, Input, OnInit } from '@angular/core';
import type { ChartData, ChartOptions } from 'chart.js';
import { take } from 'rxjs';
import { AAnalyticsService } from 'AutomatApi';

const FlatColors = require('flat-colors');

@Component({
  selector: 'admin-artikel-verkauft-graph',
  templateUrl: './artikel-verkauft-graph.component.html',
  styleUrls: ['./artikel-verkauft-graph.component.scss'],
})
export class ArtikelVerkauftGraphComponent implements OnInit {
  options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Die meist ausgeborgten Artikel',
      },
    },
  };

  data: ChartData = undefined!;

  @Input() ngxChartClass: string = '';

  constructor(private AAnalyticsService: AAnalyticsService) {}

  ngOnInit(): void {
    this.AAnalyticsService.aAnalyticsGetAnalyticsItemsGet$Json()
      .pipe(take(1))
      .subscribe((data) => {
        let GraphData = data[0];
        let labels = GraphData.monate!.map((mo: any) => {
          return mo.name;
        }) as any as string[];
        this.data = {
          labels: labels,
          datasets: [],
        };

        data.forEach((item: any, index: number) => {
          let color = FlatColors()[3];
          console.log(color);
          let dataSet = item.monate!.map((mo: any) => {
            return mo.value;
          }) as number[];
          this.data.datasets.push({
            label: '#' + (index + 1) + ' ' + item.name,
            data: dataSet,
            fill: true,
            backgroundColor: color,
            hoverBackgroundColor: color,
            borderColor: color,
            borderWidth: 3,
            cubicInterpolationMode: 'monotone',
          });
        });
      });
  }
}
