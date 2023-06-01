import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { AAnalyticsService } from 'AutomatApi';

const FlatColors = require('flat-colors');
const convert = require('color-convert');

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
        display:false
      },
      title: {
        display: true,
        text: 'Geamt ausgeborgte Artikel',
      },
      
    },
  };
  data: ChartData = undefined!;

  constructor(private AAnalyticsService: AAnalyticsService) {}

  ngOnInit(): void {
    this.AAnalyticsService.aAnalyticsGesamtBorrowsGet$Json()
      .pipe(take(1))
      .subscribe((data) => {
        let backgroundColors:string[] = []
        let hoverBackgroundColors:string[] = []
        let borderColors:string[]= []
        data.forEach(d=>{
          let color 
          do {
          color = FlatColors()[3]
          } while(convert.hex.hsl(color)[1] <30)

          backgroundColors.push(color+"80")
          hoverBackgroundColors.push(color+"d0")
          borderColors.push(color+"CA")
        })

        this.data = {
          labels: data.map(item=>item.label),
          datasets: [
            {
              data: data.map(item=>item.value) as any,
              fill: true,
              backgroundColor: backgroundColors,
              hoverBackgroundColor:  hoverBackgroundColors,
              borderColor:  borderColors,
              borderWidth: 3,
              borderRadius:10,
              cubicInterpolationMode: 'monotone',
            },
          ],
        };
      });
  }
}
