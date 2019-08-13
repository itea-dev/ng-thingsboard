import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private title = new BehaviorSubject<string>('Home');
  private title$ = this.title.asObservable();

  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
  }

  getTitle(): Observable<string> {
    return this.title$;
  }

}
