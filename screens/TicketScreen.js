import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header'


export default class TicketScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header title="tickets" navigate={goBack} />
        <Text>Get Tickets</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});