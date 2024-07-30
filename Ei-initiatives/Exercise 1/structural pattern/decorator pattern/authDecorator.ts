import { Decorator } from './decorator';

export class AuthDecorator extends Decorator {
  public operation(): string {
    const result = this.component.operation();
    console.log('AuthDecorator: Checking authentication');
    return `AuthDecorator: ${result}`;
  }
}
