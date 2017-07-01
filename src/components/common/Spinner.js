import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// create a Component
const Spinner = ({ size }) => (
  <View style={styles.containerStyle}>
    <ActivityIndicator
      size={size || 'large'}
    />
  </View>
);

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { Spinner };
