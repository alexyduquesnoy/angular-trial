export enum AppareilStatus {
  on = 'allumé',
  off = 'éteint',
  bug = 'en panne'
}

export class Appareil {

  constructor(
    public id: number,
    public name: string,
    public status: AppareilStatus
  ) {
  }

  switchOn() {
    this.status = AppareilStatus.on;
  }

  switchOff() {
    this.status = AppareilStatus.off;
  }
}
