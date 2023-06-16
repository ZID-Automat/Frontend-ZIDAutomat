import { ColorServiceService } from './../../../../../../Services/Helper/color-service.service';
import { AAnalyticsService } from 'AutomatApi';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { take } from 'rxjs';

@Component({
  selector: 'admin-wie-viel-zu-spaet-graph',
  templateUrl: './wie-viel-zu-spaet-graph.component.html',
  styleUrls: ['./wie-viel-zu-spaet-graph.component.scss'],
})
export class WieVielZuSpaetGraphComponent implements OnInit {
  constructor(
    private AAnalyticsService: AAnalyticsService,
    private ColorServiceService: ColorServiceService
  ) {}
  
  options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: true,
      },
      title: {
        display: true,
        text: 'Borrow Status',
      },
    },
  };

  ChartData: ChartData = null!;

  ngOnInit(): void {
    this.AAnalyticsService.aAnalyticsWievielZuspatGet$Json()
      .pipe(take(1))
      .subscribe((data) => {

        const labi = ['Zu Spät', 'Im Prozess',"Rechtzeitig zurückgegeben","Entschuldgt zu Spät"]

        let ChartData: any = {
          labels: data.map((d) =>labi[d.label!??0]),
          datasets: [],
        };
        const colors = this.ColorServiceService.getColors(data.length);
        ChartData.datasets.push({
          data: data.map((d) => d.num!),
          fill: true,
          backgroundColor: colors.backgroundColors,
          hoverBackgroundColor: colors.hoverBackgroundColors,
          borderColor: colors.borderColors,
          borderWidth: 2,
          borderRadius: 6,
          cubicInterpolationMode: 'monotone',
        });
        console.log(ChartData);
        this.ChartData = ChartData;
      });
  }
}
