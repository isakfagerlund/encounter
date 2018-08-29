import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import sanity from '../lib/sanity'
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

  renderContent() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return <View style={{ flex: 1, justifyContent: 'center', height: "auto" }}><Spinner color="#226c54" /></View>
    } else {
      return <Schedule navigate={navigate} events={this.state.events} days={this.state.days} />
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