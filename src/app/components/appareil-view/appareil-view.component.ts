import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../../shared/services/appareil.service';
import { Appareil } from '../../shared/models/appareil.model';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareils: Appareil[];
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date: Date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }

  ngOnInit() {
    this.appareilService.appareilsSubject.subscribe((appareils: Appareil[]) => {
      this.appareils = appareils;
    });
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    return this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('êtes-vous sûr de tout éteinder ?')) {
      this.appareilService.switchOffAll();
    }
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
}
