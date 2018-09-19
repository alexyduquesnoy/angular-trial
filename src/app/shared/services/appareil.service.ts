import { Appareil, AppareilStatus } from '../models/appareil.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<Appareil[]>();

  private appareils: Appareil[] = [];

  constructor(private httpClient: HttpClient) { }

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
    console.log(this.appareils[index]);

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

  saveAppareilsToServer() {
    this.httpClient
      .put('https://angular-trial-2b6f3.firebaseio.com/appareils.json', this.appareils)
      .subscribe(() => {
        console.log('Enregistrement terminé');
      }, (error) => {
        console.log('Une erreur a été rencontrée :' + error);
      });
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://angular-trial-2b6f3.firebaseio.com/appareils.json')
      .subscribe((response) => {
        if (response instanceof Array) {
          const appareils = response.map(element => new Appareil(element.id, element.name, element.status));
          this.appareils = appareils;
        }
        this.emitAppareilSubject();
      }, (error) => {
        console.log(error);
      });
  }
}
