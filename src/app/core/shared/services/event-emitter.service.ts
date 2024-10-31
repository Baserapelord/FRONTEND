import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventEmitterService {
  private rolAdmin$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  setRol(rolAdmin: boolean) {
    this.rolAdmin$.next(rolAdmin);
  }

  getRol() {
    return this.rolAdmin$.asObservable();
  }

  private localStorageUpdateSubject = new Subject<string>();

  localStorageUpdate$ = this.localStorageUpdateSubject.asObservable();

  notificarActualizacion(key: string): void {
    this.localStorageUpdateSubject.next(key);
  }
}
