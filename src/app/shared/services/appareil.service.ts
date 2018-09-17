import { Injectable } from '@angular/core';
import { Appareil, AppareilStatus } from '../models/appareil.model';

@Injectable()
export class AppareilService {

  appareils: Appareil[] = [
    new Appareil('Machine à laver', AppareilStatus.off),
    new Appareil('Frigo', AppareilStatus.off),
    new Appareil('Ordinateur', AppareilStatus.on)
  ];

  constructor() { }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = AppareilStatus.on;
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = AppareilStatus.off;
    }
  }

  switchOn(index) {
    this.appareils[index].switchOn();
  }

  switchOff(index) {
    this.appareils[index].switchOff();
  }
}
