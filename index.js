import { AppRegistry } from 'react-native';
import App from './src/App';
import BackgroundTask from './src/BackgroundTask';
import { version, name as appName } from './package';

console.warn(`** ${appName} version ${version}`);

AppRegistry.registerHeadlessTask('BackgroundTask', BackgroundTask);
let TheApp = null;

TheApp = App;

AppRegistry.registerComponent(appName, () => TheApp);
