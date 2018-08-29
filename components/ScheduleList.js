import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScheduleList extends React.Component {
  render() {
    const { day, times } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.day}>{day}</Text>
        {times.map((item, i) => <Text key={i} style={styles.item}>{item.time} - {item.name}</Text>)}
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
