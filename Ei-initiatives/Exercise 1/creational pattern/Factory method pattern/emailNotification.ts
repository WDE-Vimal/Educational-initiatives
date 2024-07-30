import { Notification } from './notification';

export class EmailNotification extends Notification {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}
