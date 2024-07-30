import { ChatRoomManager } from './singleton';
import { User } from './user';
import { Message } from './message';
import { ChatRoom } from './chatRoom';
import { Observer } from './observer';
import { MessageTransportAdapter, WebSocketTransport, HTTPTransport } from './adapter';

// Observer Implementation
class ChatObserver implements Observer {
  update(message: string, source: string): void {
    console.log(`[${source}] ${message}`);
  }
}

// Main Application Logic
const manager = ChatRoomManager.getInstance();
const chatRoom = manager.createRoom('Room123');

const observer = new ChatObserver();
chatRoom.addObserver(observer);

const alice = new User('Alice');
const bob = new User('Bob');

chatRoom.addUser(alice);
chatRoom.addUser(bob);

chatRoom.sendMessage(alice, 'Hello, everyone!');
chatRoom.sendMessage(bob, 'How\'s it going?');

console.log('Active Users:', chatRoom.getActiveUsers().join(', '));
console.log('Messages:', chatRoom.getMessages().map(msg => `[${msg.username}]: ${msg.content} at ${msg.timestamp}`).join('\n'));

const websocketTransport = new MessageTransportAdapter(new WebSocketTransport());
websocketTransport.sendMessage('Room123', 'WebSocket message.');

const httpTransport = new MessageTransportAdapter(new HTTPTransport());
httpTransport.sendMessage('Room123', 'HTTP message.');
