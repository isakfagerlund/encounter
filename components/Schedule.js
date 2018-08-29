import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import ScheduleList from './ScheduleList'

export default class Schedule extends React.Component {

  state = {
    thursdayEvents: [],
    fridayEvents: [],
    saturdayEvents: [],
  }

  render() {
    const { events, days } = this.props

    const thursdayRef = days.find(day => day.day === "Thursday")
    const fridayRef = days.find(day => day.day === "Friday")
    const saturdayRef = days.find(day => day.day === "Saturday")

    let thursdayEvents = []
    let fridayEvents = []
    let saturdayEvents = []

    if (thursdayRef !== undefined && fridayRef !== undefined && saturdayRef !== undefined) {
      thursdayEvents = events.filter(event => event.selectedDay._ref === thursdayRef._id)
      fridayEvents = events.filter(event => event.selectedDay._ref === fridayRef._id)
      saturdayEvents = events.filter(event => event.selectedDay._ref === saturdayRef._id)
    }




    return (
      <ScrollView style={styles.container}>
        <ScheduleList times={thursdayEvents} day="Thursday" />
        <ScheduleList times={fridayEvents} day="Friday" />
        <ScheduleList times={saturdayEvents} day="Saturday" />
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
