import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import App from './src/App';
import BackgroundTask from './src/BackgroundTask';
import { story, version, name as appName } from './package';

console.warn(`** ${appName} version ${version}`);

AppRegistry.registerHeadlessTask('BackgroundTask', BackgroundTask);
let TheApp = null;
if (story) {
  configure(() => {
    require('./storybook/stories');
  }, module);
  TheApp = getStorybookUI({});
} else {
  TheApp = App;
}

AppRegistry.registerComponent(appName, () => TheApp);
