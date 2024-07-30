// Singleton class to manage the chat rooms
export class ChatRoomManager {
    private static instance: ChatRoomManager;
    private chatRooms: Map<string, ChatRoom> = new Map();
  
    private constructor() {}
  
    public static getInstance(): ChatRoomManager {
      if (!ChatRoomManager.instance) {
        ChatRoomManager.instance = new ChatRoomManager();
      }
      return ChatRoomManager.instance;
    }
  
    public createRoom(roomId: string): ChatRoom {
      if (!this.chatRooms.has(roomId)) {
        const chatRoom = new ChatRoom(roomId);
        this.chatRooms.set(roomId, chatRoom);
        return chatRoom;
      }
      throw new Error(`Room with ID ${roomId} already exists.`);
    }
  
    public getRoom(roomId: string): ChatRoom | undefined {
      return this.chatRooms.get(roomId);
    }
  }
  