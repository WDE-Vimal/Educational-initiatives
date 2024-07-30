// Adapter to handle different client communication protocols
export interface MessageTransport {
    sendMessage(roomId: string, message: string): void;
  }
  
  export class WebSocketTransport implements MessageTransport {
    public sendMessage(roomId: string, message: string): void {
      console.log(`WebSocket: Sending message to ${roomId}: ${message}`);
      // Implement WebSocket logic here
    }
  }
  
  export class HTTPTransport implements MessageTransport {
    public sendMessage(roomId: string, message: string): void {
      console.log(`HTTP: Sending message to ${roomId}: ${message}`);
      // Implement HTTP logic here
    }
  }
  
  export class MessageTransportAdapter implements MessageTransport {
    private transport: MessageTransport;
  
    constructor(transport: MessageTransport) {
      this.transport = transport;
    }
  
    public sendMessage(roomId: string, message: string): void {
      this.transport.sendMessage(roomId, message);
    }
  }
  