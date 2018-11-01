import { AppRegistry } from 'react-native';
import App from './App';
import BackgroundTask from './BackgroundTask';
import { name as appName } from './app.json';

AppRegistry.registerHeadlessTask('BackgroundTask', BackgroundTask);

AppRegistry.registerComponent(appName, () => App);
