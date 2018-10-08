import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { PictureContext, AppHeader, AppFooter, withBack, SparePartSelector } from '@components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

const Screen3P = ({ navigation }) => {
  const onSuccess = (ret, func) => {
    func(ret);
    navigation.navigate('Screen4');
  };

  const reset = navigation.getParam('reset', false);

  return (
    <PictureContext.Consumer>
      {({ selectNewItem }) => (
        <KeyboardAvoidingView style={styles.container}>
          <AppHeader home />
          <SparePartSelector
            style={styles.spareParts}
            onSuccess={ret => onSuccess(ret, selectNewItem)}
            reset={reset}
          />
          <AppFooter />
        </KeyboardAvoidingView>
      )}
    </PictureContext.Consumer>
  );
};

export default withNavigation(withBack(Screen3P));
