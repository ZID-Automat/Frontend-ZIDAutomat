import { ColorServiceService } from './../../../../../../Services/Helper/color-service.service';
import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { AAnalyticsService } from 'AutomatApi';

@Component({
  selector: 'admin-gesamt-borrow',
  templateUrl: './gesamt-borrow.component.html',
  styleUrls: ['./gesamt-borrow.component.scss'],
})
export class GesamtBorrowComponent implements OnInit {
  options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: true,
        text: 'Gesamt ausgeborgte Artikel',
      },
    },
  };
  data: ChartData = undefined!;

  constructor(
    private AAnalyticsService: AAnalyticsService,
    private ColorServiceService: ColorServiceService
  ) {}

  ngOnInit(): void {
    this.AAnalyticsService.aAnalyticsGesamtBorrowsGet$Json()
      .pipe(take(1))
      .subscribe((data) => {
        const colors = this.ColorServiceService.getColors(data.length);

        this.data = {
          labels: data.map((item) => item.label),
          datasets: [
            {
              data: data.map((item) => item.value) as any,
              fill: true,
              backgroundColor: colors.backgroundColors,
              hoverBackgroundColor: colors.hoverBackgroundColors,
              borderColor: colors.borderColors,
              borderWidth: 3,
              borderRadius: 10,
              cubicInterpolationMode: 'monotone',
            },
          ],
        };
      });
  }
}
