import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header'

export default class SingleEventScreen extends React.Component {
  static navigationOptions = {
    header: null
  };


  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'No Item');

    return (
      <View style={styles.container}>
        <Header title={item.name} navigate={navigation.goBack} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ color: 'white', fontSize: 24 }}>{item.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2e2e3a',
  },
});