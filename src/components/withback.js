import React, { Component } from 'react';
import { BackHandler } from 'react-native';

const withBack = OtherComponent =>
  class extends Component {
    componentDidMount() {
      const { navigation } = this.props;
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        navigation.goBack();
        return true;
      });
    }

    componentWillUnmount() {
      this.backHandler.remove();
    }

    render = () => <OtherComponent {...this.props} />;
  };

export default withBack;
