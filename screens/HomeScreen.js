import React from 'react';
import { View, StyleSheet, Text, ImageBackground, StatusBar, Image, Linking } from 'react-native';
import { Button, Icon } from 'native-base';
import { Video, Asset } from 'expo'
const videoURI = Asset.fromModule(require('./bg.mp4')).uri;

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
      <ImageBackground style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={{ width: 350, height: 300, zIndex: 10, top: 50, flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }} >
          <Image
            source={require('./logo.png')}
            style={{ width: 350, height: "100%" }}
          />
        </View>
        <Video
          source={{ uri: videoURI }}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ position: "absolute", zIndex: 0, top: 0, width: "100%", height: "100%" }}
        />
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }} >
          <Button
            transparent
            style={styles.btn}
            onPress={() =>
              navigate('Schedule')
            }>
            <Text style={{ color: '#333' }} >Go to Schedule </Text><Icon name='calendar' style={{ color: '#333', marginRight: 0 }} />
          </Button>
          <Button
            transparent
            style={styles.btn}
            onPress={() =>
              Linking.openURL('https://www.eventbrite.co.uk/e/encounter-conference-2019-tickets-51973281484?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing')
            }>
            <Text style={{ color: '#333' }} >Go to Tickets </Text><Icon name='basket' style={{ color: '#333', marginRight: 0 }} />
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    color: '#28dbb7',
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
    marginBottom: 15,
    width: 200,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333',
  },
});