import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../../shared/services/appareil.service';
import { Appareil } from '../../shared/models/appareil.model';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: Appareil[];
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date: Date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    return this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('êtes-vous sûr de tout éteinder ?')) {
      this.appareilService.switchOffAll();
    }
  }
}
