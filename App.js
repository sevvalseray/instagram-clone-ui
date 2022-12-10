import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './Screens';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex :1}}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
