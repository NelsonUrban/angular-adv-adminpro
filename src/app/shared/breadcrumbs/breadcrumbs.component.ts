import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, map, Subscriber, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {


  public titulo : any;
  public tituloSubs$ : Subscription;

  constructor( private router : Router) { 
   this.tituloSubs$ = this.getArgumentoRuta().subscribe( (event ) => {
    this.titulo = (event)
     console.log(this.titulo)
     document.title = `AdminPro - ${this.titulo?.snapshot?.data?.titulo}`
    });
  
  }
  ngOnDestroy(): void {
   this.tituloSubs$.unsubscribe();
  }

  getArgumentoRuta() 
  {
    return  this.router.events
    .pipe(
      map((event) => event),  
      filter((event) => event  instanceof ActivationEnd ),  
      take(1),  
      );  
  }
}
