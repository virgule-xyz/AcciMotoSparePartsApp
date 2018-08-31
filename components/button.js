import React, {
  Component
} from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import ColorOrange from "../UI";

export default class ActionButton extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={[styles.buttonWrapper, this.props.style]} onPress={ () => { this.props.onPress() } }>
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: "#f90",
    borderRadius: 3,
    paddingTop:15,
    paddingBottom:15,
    textAlign: "center",
    elevation: 4
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    margin:0,
    padding:0
  }
});
