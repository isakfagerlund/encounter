import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import sanity from '../lib/sanity'
import FadeInView from '../components/FadeInView'
import Header from '../components/Header'
import Schedule from '../components/Schedule'


export default class ProfileScreen extends React.Component {

  state = { events: [], days: [], isLoading: true }

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    this.setState({
      events: await sanity.fetch("*[_type == $type]", { type: 'event' }),
      days: await sanity.fetch("*[_type == $type]", { type: 'day' }),
      isLoading: false
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header title="schedule" navigate={navigate} />
        {!this.state.isLoading ? <FadeInView style={{ flex: 1 }} >
          <Schedule navigate={navigate} events={this.state.events} days={this.state.days} />}
        </FadeInView> : <View style={{ flex: 1, justifyContent: 'center', height: "auto" }}><Spinner /></View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});