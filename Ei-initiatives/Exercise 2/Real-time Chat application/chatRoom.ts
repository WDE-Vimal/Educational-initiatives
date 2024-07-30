import { Observer } from './observer';
import { User } from './user';
import { Message } from './message';

// ChatRoom class to manage users and messages
export class ChatRoom {
  private users: Map<string, User> = new Map();
  private messages: Message[] = [];
  private observers: Observer[] = [];

  constructor(public roomId: string) {}

  public addUser(user: User): void {
    this.users.set(user.username, user);
    this.notifyObservers(`${user.username} has joined the room.`);
  }

  public removeUser(username: string): void {
    this.users.delete(username);
    this.notifyObservers(`${username} has left the room.`);
  }

  public sendMessage(user: User, content: string): void {
    const message = new Message(user.username, content);
    this.messages.push(message);
    this.notifyObservers(`[${user.username}]: ${content}`);
  }

  public getActiveUsers(): string[] {
    return Array.from(this.users.keys());
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  private notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.update(message, 'ChatRoom'));
  }
}
