import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../../shared/services/appareil.service';
import { AppareilStatus } from '../../shared/models/appareil.model';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil-item.component.html',
  styleUrls: ['./appareil-item.component.scss']
})
export class AppareilItemComponent implements OnInit {

  appareilStatusEnum = AppareilStatus;

  @Input() id: number;
  @Input() index: number;
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor(): string {
    let color: string;
    if (this.appareilStatus === this.appareilStatusEnum.on) {
      color = 'green';
    } else if (this.appareilStatus.toLowerCase() === this.appareilStatusEnum.off) {
      color = 'red';
    }

    return color;
  }

  onSwitch() {
    if (this.appareilStatus === this.appareilStatusEnum.off) {
      this.appareilService.switchOn(this.index);
    } else if (this.appareilStatus === this.appareilStatusEnum.on) {
      this.appareilService.switchOff(this.index);
    }
  }
}
