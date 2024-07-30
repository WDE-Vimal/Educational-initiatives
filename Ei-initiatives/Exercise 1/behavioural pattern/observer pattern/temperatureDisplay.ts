import { Observer } from './observer';

export class TemperatureDisplay implements Observer {
  public update(temperature: number) {
    console.log(`TemperatureDisplay: I need to update my display to ${temperature}`);
  }
}
