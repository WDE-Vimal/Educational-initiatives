import { Notification } from './notification';

export class SMSNotification extends Notification {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}
