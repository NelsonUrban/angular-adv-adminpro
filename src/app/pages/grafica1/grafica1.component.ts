import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1 : string[] ;
  public data1: number[];

constructor()
{
  this.labels1 = [ 'Nelson Labels1', 'Nelson Labels1', 'Nelson Labels1' ];
  this.data1 = [ 10, 15, 45 ];
}


}
