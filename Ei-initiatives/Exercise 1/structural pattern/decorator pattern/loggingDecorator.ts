import { Decorator } from './decorator';

export class LoggingDecorator extends Decorator {
  public operation(): string {
    const result = this.component.operation();
    console.log(`LoggingDecorator: Logging operation - ${result}`);
    return `LoggingDecorator: ${result}`;
  }
}
