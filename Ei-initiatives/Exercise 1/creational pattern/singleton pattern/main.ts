import ConfigManager from './configManager';

const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

config1.setSetting('apiUrl', 'https://api.newexample.com');
console.log(config2.getSetting('apiUrl')); // Outputs: https://api.newexample.com

console.log(config1 === config2); // Outputs: true, proving both references are the same instance
