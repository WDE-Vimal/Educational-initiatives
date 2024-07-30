import { LegacySystem } from './legacySystem';
import { Adapter } from './adapter';

const legacy = new LegacySystem();
const adapter = new Adapter();

console.log('Using Legacy System:');
legacy.request('Legacy Data');

console.log('\nUsing Adapter:');
adapter.request('Adapted Data');
