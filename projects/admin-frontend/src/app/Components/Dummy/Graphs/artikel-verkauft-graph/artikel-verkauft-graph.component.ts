import { ColorServiceService } from './../../../../../../Services/Helper/color-service.service';
import { AnalyticItemMonth } from './../../../../../../../automat-api/src/API/models/analytic-item-month';
import { Component, Input, OnInit } from '@angular/core';
import type { ChartData, ChartOptions } from 'chart.js';
import { take } from 'rxjs';
import { AAnalyticsService } from 'AutomatApi';

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
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Die meist ausgeborgten Artikel',
      },
    },
  };

  data: ChartData = undefined!;

  @Input() ngxChartClass: string = '';

  constructor(private AAnalyticsService: AAnalyticsService, private ColorServiceService:ColorServiceService) {}

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
          const colors = this.ColorServiceService.getColors(1);

          let dataSet = item.monate!.map((mo: any) =>mo.value)as number[];
          this.data.datasets.push({
            label: '#' + (index + 1) + ' ' + item.name,
            data: dataSet,
            fill: true,
            backgroundColor: colors.backgroundColors[0],
            hoverBackgroundColor: colors.hoverBackgroundColors[0],
            borderColor: colors.borderColors[0],
            borderWidth: 3,
            cubicInterpolationMode: 'monotone',
          });
        });
      });
  }
}
