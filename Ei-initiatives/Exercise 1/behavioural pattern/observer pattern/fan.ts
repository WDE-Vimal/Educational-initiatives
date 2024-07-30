import { Observer } from './observer';

export class Fan implements Observer {
  public update(temperature: number) {
    if (temperature > 25) {
      console.log(`Fan: It's hot here, turning myself on...`);
    } else {
      console.log(`Fan: It's nice and cool, turning myself off...`);
    }
  }
}
