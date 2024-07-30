import { WeatherStation } from './weatherStation';
import { TemperatureDisplay } from './temperatureDisplay';
import { Fan } from './fan';

const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay();
const fan = new Fan();

weatherStation.addObserver(tempDisplay);
weatherStation.addObserver(fan);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
