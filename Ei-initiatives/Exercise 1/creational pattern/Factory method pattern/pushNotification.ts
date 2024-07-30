import { Notification } from './notification';

export class PushNotification extends Notification {
  send(message: string): void {
    console.log(`Sending Push Notification: ${message}`);
  }
}
