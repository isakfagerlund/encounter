import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment'

export default class ScheduleList extends React.Component {
  render() {
    const { event, navigate } = this.props
    const eventArray = event[Object.keys(event)[0]]
    return (
      <View style={styles.container}>
        <Text style={styles.day}>{moment(Object.keys(event)[0]).format('dddd')}</Text>
        {eventArray.map((item, i) => <TouchableOpacity key={i} onPress={() => navigate('SingleEvent', { item })}><Text style={styles.item}>{item.name} - {moment(item.datetime).format("HH:mm")}</Text></TouchableOpacity>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  item: {
    color: '#333',
    padding: 25,
    fontSize: 16,
  },
  day: {
    backgroundColor: '#28dbb7',
    alignSelf: 'stretch',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white'
  }
});
