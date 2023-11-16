import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Bar from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Bar />
    </NavigationContainer>
  )
}

export default App;