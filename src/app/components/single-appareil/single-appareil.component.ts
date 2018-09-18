import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../../shared/services/appareil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appareil } from '../../shared/models/appareil.model';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string;
  status: string;

  constructor(private appareilService: AppareilService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id: number = +this.activatedRoute.snapshot.params['id'];
    const appareil: Appareil = this.appareilService.getAppareilById(id);

    if (appareil instanceof Appareil) {
      this.name = appareil.name;
      this.status = appareil.status;
    } else {
      this.router.navigate(['/not-found']);
    }
  }

}
