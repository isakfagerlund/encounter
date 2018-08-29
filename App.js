import HomeScreen from './screens/HomeScreen'
import ScheduleScreen from './screens/ScheduleScreen'

import {
  createStackNavigator,
} from 'react-navigation';


const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Schedule: { screen: ScheduleScreen },
});

App.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default App;

