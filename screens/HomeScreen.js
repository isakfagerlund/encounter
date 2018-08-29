import React from 'react';
import { Button, View, StyleSheet, Text, Image } from 'react-native';

const remote = 'https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2018/07/10070416/hsc19-championing-bg-1500x610.jpg';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            source={{ uri: remote }}
          >
          </Image>
          <Text style={styles.logo}>
            ENCOUNTER 2019
          </Text>
          <Text style={styles.description}>
            THIS IS FOR EVERYONE
          </Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
          <Button
            style={styles.btn}
            color="#fff"
            title="Go to Schedule"
            onPress={() =>
              navigate('Schedule')
            }
          />
        </View>
      </View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e2e3a',
  },
});