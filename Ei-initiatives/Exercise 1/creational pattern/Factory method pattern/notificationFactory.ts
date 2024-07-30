import { Notification } from './notification';
import { EmailNotification } from './emailNotification';
import { SMSNotification } from './smsNotification';
import { PushNotification } from './pushNotification';

export abstract class NotificationFactory {
  abstract createNotification(): Notification;
}

export class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

export class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

export class PushNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new PushNotification();
  }
}
