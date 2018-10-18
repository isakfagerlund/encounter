import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import ScheduleList from './ScheduleList'

export default class Schedule extends React.Component {

  render() {
    const { events, navigate } = this.props

    return (
      <ScrollView style={styles.container}>
        <ScheduleList events={events} navigate={navigate} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    color: '#333',
    padding: 10,
  },
  day: {
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  }
});
