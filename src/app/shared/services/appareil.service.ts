import { Appareil, AppareilStatus } from '../models/appareil.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<Appareil[]>();

  private appareils: Appareil[] = [
    new Appareil(1, 'Machine à laver', AppareilStatus.off),
    new Appareil(2, 'Frigo', AppareilStatus.off),
    new Appareil(3, 'Ordinateur', AppareilStatus.on)
  ];

  constructor() { }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = AppareilStatus.on;
    }
    this.emitAppareilSubject();
  }

  switchOffAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = AppareilStatus.off;
    }
    this.emitAppareilSubject();
  }

  switchOn(index): void {
    this.appareils[index].switchOn();
    this.emitAppareilSubject();
  }

  switchOff(index): void {
    this.appareils[index].switchOff();
    this.emitAppareilSubject();
  }

  getAppareilById(id: number): Appareil {
    return this.appareils.find((appareil) => {
      return appareil.id === id;
    });
  }

  addAppareil(name: string, status: AppareilStatus) {
    const id: number = this.appareils[this.appareils.length - 1].id + 1;
    const newAppareil = new Appareil(id, name, status);
    this.appareils.push(newAppareil);
    this.emitAppareilSubject();
  }
}
