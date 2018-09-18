import { Component, OnInit } from '@angular/core';
import { AppareilStatus, Appareil } from '../../shared/models/appareil.model';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../../shared/services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  appareilStatus = AppareilStatus;

  constructor(private appareilService: AppareilService, private router: Router) {
  }

  ngOnInit() {
  }

  getAppareilStatus(): Array<string> {
    return Object.values(this.appareilStatus);
  }

  onSubmit(form: NgForm): void {
    const formValues = form.value;
    this.appareilService.addAppareil(formValues.name, formValues.status);
    this.router.navigate(['/appareils']);
  }

}
