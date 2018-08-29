import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class SingleEventScreen extends React.Component {
  static navigationOptions = {
    header: null
  };


  render() {

    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Single Event</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e2e3a',
  },
});