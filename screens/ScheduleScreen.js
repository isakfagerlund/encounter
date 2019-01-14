import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import moment from 'moment'
import sanity from '../lib/sanity'
import Header from '../components/Header'
import Schedule from '../components/Schedule'


export default class ProfileScreen extends React.Component {

  state = { events: [], isLoading: true }

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const events = await sanity.fetch("*[_type == $type]", { type: 'event' })

    const parsedEvents = {};

    events.map((event) => {
      const day = moment(event.datetime).startOf('day');

      if (!parsedEvents[day]) {
        parsedEvents[day] = [];
      }

      parsedEvents[day].push(event);
    });

    const finalEvents = Object.keys(parsedEvents).map((date) => {
      const obj = {};

      obj[date] = parsedEvents[date];

      return obj;
    })

    console.log(finalEvents)

    this.setState({
      events: finalEvents,
      isLoading: false
    })
  }

  renderContent() {
    const { navigate } = this.props.navigation;

    if (this.state.isLoading) {
      return <View style={{ flex: 1, justifyContent: 'center', height: "auto" }}><Spinner color="#226c54" /></View>
    } else {
      return <Schedule navigate={navigate} events={this.state.events} />
    }

  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header title="schedule" navigate={goBack} />
        {this.renderContent()}
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