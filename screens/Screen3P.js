import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { PictureContext, AppHeader, AppFooter, withBack, SparePartSelector } from '@components';
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

const Screen3P = ({ navigation, country }) => {
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
            country={country}
          />
          <AppFooter />
        </KeyboardAvoidingView>
      )}
    </PictureContext.Consumer>
  );
};

export default withBack(withLanguage(Screen3P));
