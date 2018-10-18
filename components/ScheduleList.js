import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import moment from 'moment'

export default class ScheduleList extends React.Component {
  render() {
    const { events, navigate } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.day}>Test</Text>
        {events.map((item, i) => <TouchableHighlight key={i} onPress={() => navigate('SingleEvent', { item })}><Text style={styles.item}>{item.name} - {moment(item.datetime).format("dddd")}</Text></TouchableHighlight>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  item: {
    color: '#333',
    padding: 25,
    fontSize: 16,
  },
  day: {
    backgroundColor: '#226c54',
    alignSelf: 'stretch',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white'
  }
});
