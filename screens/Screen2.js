import React from 'react';
import { StyleSheet, View } from 'react-native';
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

const Screen2 = ({ navigation }) => {
  const onSuccess = (ret, func) => {
    func(ret);
    navigation.navigate('Screen3');
  };

  const reset = navigation.getParam('reset', false);

  return (
    <PictureContext.Consumer>
      {({ selectNewItem }) => (
        <View style={styles.container}>
          <AppHeader home />
          <SparePartSelector
            style={styles.spareParts}
            onSuccess={ret => onSuccess(ret, selectNewItem)}
            reset={reset}
          />
          <AppFooter home />
        </View>
      )}
    </PictureContext.Consumer>
  );
};

export default withNavigation(withBack(Screen2));
