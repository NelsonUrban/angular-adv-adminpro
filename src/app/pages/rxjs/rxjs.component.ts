import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take,map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent  implements OnDestroy {

  public intervalSubs : Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs',valor), 
    //   (err) => console.warn('Error',err),
    //   () => console.info('Obs Terminado')
    // );

  this.intervalSubs = this.retornaIntervalo()
   .subscribe( console.log)
  }

  retornaIntervalo() : Observable<number>
  {
    return interval(1000)
     .pipe(      
      //  take(10),
      map((valor) => valor + 1),
      filter( valor => (valor % 2 ) === 0 ? true : false),
     );
  }  

  retornaObservable()
  {
    let i = -1;
    
    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
           clearInterval(intervalo);
           observer.complete();
        }
        if (i === 2) {
          console.log('ERROR')
          observer.error('Error porque si ');
       }

      }, 1000)

    });
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


}
