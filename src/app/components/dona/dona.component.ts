import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title : string ='Sin Titulo';
  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data')  data : number[] = [ 10, 50, 100 ];

 doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
 
  public colors: Color[] = [
    // {backgroundColor: ['#9E120E','#FFF5800','#FFV414']}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
