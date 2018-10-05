import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import PictureContext from '@components/picturecontext';

import Screen1 from '@screens/Screen1';
import Screen2 from '@screens/Screen2';
import Screen3 from '@screens/Screen3';
import Screen4 from '@screens/Screen4';
import Screen5 from '@screens/Screen5';

const ScreenStacks = createStackNavigator(
  {
    Screen2,
    Screen3,
    Screen4,
    Screen5,
  },
  {
    initialRouteName: 'Screen2',
    navigationOptions: {
      header: null,
    },
  },
);

const Navigator = createSwitchNavigator(
  {
    Screen1,
    ScreenStacks,
  },
  {
    initialRouteName: 'Screen1',
    navigationOptions: {
      header: null,
    },
  },
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inter = null;
    this.state = {
      pictures: [],
      queue: ['abc', 'def', 'ghi', 'jkl', 'mno'],
      addPicture: this.addPicture,
      removePicture: this.removePicture,
      uploadPictures: this.uploadPictures,
    };
  }
  uploadPictures = () => {
    this.setState(state => ({
      pictures: [],
      queue: [...state.queue, state.pictures],
    }));
    if (!this.inter) {
      this.backgroundRunner();
    }
  };
  backgroundRunner = () => {
    if (this.inter) {
      clearInterval(this.inter);
    }
    this.inter = setInterval(() => {
      if (this.state.queue.length > 0) {
        const toUpload = this.state.queue[0];
        this.setState(state => ({
          queue: state.queue.slice(1),
        }));
        this.FTPPicture(toUpload);
      }
    }, 4000);
  };
  FTPPicture = filename => {
    //console.warn('uploading ', filename);
  };
  addPicture = data => {
    this.setState(state => ({
      pictures: [...state.pictures, data.uri],
    }));
  };
  removePicture = (index, pname) => {
    console.warn(index, pname);
    const newPictures = this.state.pictures.filter((item, id) => id + item !== index + pname);
    this.setState(state => ({
      pictures: newPictures,
    }));
  };
  componentDidMount = () => {
    this.backgroundRunner();
  };
  render = () => (
    <PictureContext.Provider value={this.state}>
      <Navigator />
    </PictureContext.Provider>
  );
}

export default App;
