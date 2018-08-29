import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Button, Icon } from 'native-base';

const remote = 'https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2018/07/10070416/hsc19-championing-bg-1500x610.jpg';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground source={{ uri: remote }} style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={styles.logo}>
            ENCOUNTER 2019
          </Text>
          <Text style={styles.description}>
            THIS IS FOR EVERYONE
          </Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
          <Button
            transparent
            style={styles.btn}
            onPress={() =>
              navigate('Schedule')
            }>
            <Text style={{ color: 'white' }} >Go to Schedule </Text><Icon name='calendar' style={{ color: 'white', marginRight: 0 }} />
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    color: 'white',
    fontSize: 35,
    fontWeight: '900',
  },
  description: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400'
  },
  btn: {
    padding: 20,
    backgroundColor: '#AA9055',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e2e3a',
  },
});