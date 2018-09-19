import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {

  private users: User[] = [
    new User(
      'William',
      'Westerloppe',
      'william.westerlopper@none.fr',
      'coca',
      ['collectionner les steelbooks', 'faire des tutos angular']
    ),
    new User(
      'Pierrick',
      'Flajoulot',
      'pierrick.flajoulot@arvato.fr',
      'café sucré',
      ['collectionner les vinyles']
    )
  ];
  userSubject = new Subject<User[]>();

  constructor() { }

  emitUserSubject() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUserSubject();
  }
}
