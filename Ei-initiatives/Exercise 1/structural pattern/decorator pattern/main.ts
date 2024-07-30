import { SimpleComponent } from './simpleComponent';
import { LoggingDecorator } from './loggingDecorator';
import { AuthDecorator } from './authDecorator';

const simple = new SimpleComponent();
console.log('Simple Component:');
console.log(simple.operation());

const logged = new LoggingDecorator(simple);
console.log('\nLogged Component:');
console.log(logged.operation());

const authenticated = new AuthDecorator(logged);
console.log('\nAuthenticated Component:');
console.log(authenticated.operation());
