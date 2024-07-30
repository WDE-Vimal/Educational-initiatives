import { Observer } from './observer';


export class WeatherStation {
  private temperature: number = 0;
  private observers: Observer[] = [];

  public addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  public setTemperature(temp: number) {
    console.log(`WeatherStation: new temperature measurement: ${temp}`);
    this.temperature = temp;
    this.notifyObservers();
  }

  private notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}
