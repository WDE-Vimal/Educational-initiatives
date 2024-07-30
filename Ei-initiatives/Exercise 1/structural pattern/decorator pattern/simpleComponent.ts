import { Component } from './component';

export class SimpleComponent implements Component {
  public operation(): string {
    return 'SimpleComponent operation';
  }
}
