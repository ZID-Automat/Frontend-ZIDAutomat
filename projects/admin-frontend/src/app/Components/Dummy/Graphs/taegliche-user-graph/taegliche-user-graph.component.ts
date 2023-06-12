import { ColorServiceService } from './../../../../../../Services/Helper/color-service.service';
import { AAnalyticsService } from 'AutomatApi';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { take } from 'rxjs';

@Component({
  selector: 'admin-taegliche-user-graph',
  templateUrl: './taegliche-user-graph.component.html',
  styleUrls: ['./taegliche-user-graph.component.scss']
})
export class TaeglicheUserGraphComponent implements OnInit {

  options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display:true
      },
      title: {
        display: true,
        text: 'Nutzer Aktivität',
      },
      
    },
  };

  ChartData:ChartData = null!

  constructor(private AAnalyticsService:AAnalyticsService, private ColorServiceService:ColorServiceService) { }

  ngOnInit(): void {
    
    this.AAnalyticsService.aAnalyticsTaeglicheUserGet$Json().pipe(take(1)).subscribe((data)=>{
      let ChartData:any = {
        labels: data.map(d=>d.label!),
        datasets:[],
      }
      const colors = this.ColorServiceService.getColors(data.length)
      ChartData.datasets.push(
        {
          data:data.map(d=>d.value!),
          fill: true,
            backgroundColor: colors.backgroundColors,
            hoverBackgroundColor:  colors.hoverBackgroundColors,
            borderColor: colors.borderColors,
            borderWidth: 2,
            borderRadius:6,
            cubicInterpolationMode: 'monotone',
        }
       )
      console.log(ChartData)
      this.ChartData = ChartData
    });
  }

}
