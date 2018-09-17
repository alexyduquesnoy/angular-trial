export enum AppareilStatus {
  on = 'allumé',
  off = 'éteint',
  bug = 'en panne'
}

export class Appareil {
  name: string;
  status: string;

  constructor(name: string, status: AppareilStatus) {
    this.name = name;
    this.status = status;
  }

  switchOn() {
    this.status = AppareilStatus.on;
  }

  switchOff() {
    this.status = AppareilStatus.off;
  }
}

// export {Appareil, AppareilStatus};
