import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'native-base';

export default class Header extends React.Component {
  render() {
    const { title, navigate } = this.props
    return (
      <View style={styles.header}>
        <Button
          transparent
          style={{
            height: 40,
          }}
          onPress={() => navigate()}
        >
          <Icon style={{ color: 'white' }} name='arrow-back' />
        </Button>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#2e2e3a',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 10,
    paddingBottom: 5,
  },
});
