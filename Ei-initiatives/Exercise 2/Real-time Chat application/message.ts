// Message class to represent a chat message
export class Message {
    constructor(public username: string, public content: string, public timestamp: Date = new Date()) {}
  }
  