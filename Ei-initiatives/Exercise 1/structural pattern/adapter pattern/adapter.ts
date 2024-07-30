import { NewSystem } from './newSystem';
import { LegacySystem } from './legacySystem';

export class Adapter extends LegacySystem {
  private newSystem: NewSystem;

  constructor() {
    super();
    this.newSystem = new NewSystem();
  }

  public request(data: string) {
    console.log('Adapter: Converting data to new system format.');
    this.newSystem.send(data);
  }
}
