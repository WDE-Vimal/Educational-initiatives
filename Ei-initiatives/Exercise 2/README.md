# Real-Time Chat Application

This repository demonstrates a simple real-time chat application using TypeScript, incorporating design patterns such as Observer, Singleton, and Adapter. The application allows users to join or create chat rooms, send and receive messages in real-time, and display a list of active users in the chat room.

## Features

- Create or join chat rooms by entering a unique room ID.
- Send and receive messages in real-time within a chat room.
- Display a list of active users in the chat room.
- Optional features: private messaging and message history.

## Design Patterns

1. **Behavioral Pattern: Observer**
   - Used to notify clients of new messages or user activities.
2. **Creational Pattern: Singleton**
   - Manages the state of the chat rooms, ensuring a single instance of the chat room manager.
3. **Structural Pattern: Adapter**
   - Allows the system to work with different types of client communication protocols (WebSocket, HTTP).

## File Structure

/Exercise 2
/Real-time chat application
- adapter.ts
- chatRoom.ts
- chatServer.ts
- message.ts
- observer.ts
- singleton.ts
- user.ts
- main.ts
*README.md

## Implementation Details


Observer Pattern:
File: Real-time chat application/observer.ts

Defines the Observer interface to update clients with new messages or user activities.

Singleton Pattern
File: Real-time chat application/singleton.ts

Implements the ChatRoomManager class to manage the state of the chat rooms, ensuring only one instance exists.

Adapter Pattern
File: Real-time chat application/adapter.ts

Implements the MessageTransport interface and its concrete classes WebSocketTransport and HTTPTransport to handle different client communication protocols.

Chat Room
File: Real-time chat application/chatRoom.ts

Manages users and messages within a chat room. Implements methods to add/remove users, send messages, and notify observers.

User
File: Real-time chat application/user.ts

Represents a user in the chat application.

Message
File: Real-time chat application/message.ts

Represents a chat message.

Main Application
File: Real-time chat application/main.ts