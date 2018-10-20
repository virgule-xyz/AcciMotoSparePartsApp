import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { PictureContext, AppHeader, AppFooter, withBack, MotoSelector } from '@components';
import { withLanguage } from '../UI';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

const Screen3M = ({ navigation }) => {
  const onSuccess = (ret, func) => {
    func(ret);
    navigation.navigate('Screen4');
  };

  const reset = navigation.getParam('reset', false);

  return (
    <PictureContext.Consumer>
      {({ selectNewItem }) => (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <AppHeader home />
          <MotoSelector
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

export default withBack(withLanguage(Screen3M));
