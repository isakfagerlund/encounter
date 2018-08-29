import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Header extends React.Component {
  render() {
    const { title, navigate } = this.props
    return (
      <View style={styles.header}>
        <Button 
          style={styles.button}
          title="←"
          color="white"
          onPress={() => navigate('Home')}
        />
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingLeft: 10,
    flexDirection: 'row',
    height: 85,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    backgroundColor: '#2e2e3a',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 10,
  },
});
