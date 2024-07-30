class ConfigManager {
    private static instance: ConfigManager;
    private settings: { [key: string]: any } = {};
  
    private constructor() {
      // Initialize configuration settings
      this.settings = {
        apiUrl: 'https://api.example.com',
        timeout: 5000,
      };
    }
  
    public static getInstance(): ConfigManager {
      if (!ConfigManager.instance) {
        ConfigManager.instance = new ConfigManager();
      }
      return ConfigManager.instance;
    }
  
    public getSetting(key: string): any {
      return this.settings[key];
    }
  
    public setSetting(key: string, value: any): void {
      this.settings[key] = value;
    }
  }
  
  export default ConfigManager;
  