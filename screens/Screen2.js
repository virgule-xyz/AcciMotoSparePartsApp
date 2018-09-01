import React, {Component} from 'react';
import SparePartSelector from '../components/sparepartselector';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';
import {StyleSheet, BackHandler, View} from 'react-native';

type Props = {};

export default class Screen2 extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const language = this.props.navigation.getParam('language', 'fr');
    return (<View style={styles.container}>
      <AppHeader language={language}/>
        <SparePartSelector style={styles.spareParts} language={language}/>
      <AppFooter navigation={this.props.navigation} language={language} uploaderCount={0}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
});
