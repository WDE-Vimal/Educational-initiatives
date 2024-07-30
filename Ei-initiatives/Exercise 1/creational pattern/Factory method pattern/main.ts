import { NotificationFactory, EmailNotificationFactory, SMSNotificationFactory, PushNotificationFactory } from './notificationFactory';

function sendNotification(factory: NotificationFactory, message: string) {
  const notification = factory.createNotification();
  notification.send(message);
}

const emailFactory = new EmailNotificationFactory();
const smsFactory = new SMSNotificationFactory();
const pushFactory = new PushNotificationFactory();

sendNotification(emailFactory, 'Hello via Email!');
sendNotification(smsFactory, 'Hello via SMS!');
sendNotification(pushFactory, 'Hello via Push Notification!');
