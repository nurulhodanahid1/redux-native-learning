import { StatusBar as expoStatusBar } from 'expo-status-bar';
import { View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
/// redux
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider style={{ marginTop: StatusBar.currentHeight }}>

          <Navigation colorScheme={colorScheme} />
          {/* <StatusBar /> */}
        </SafeAreaProvider>
      </Provider>
    );
  }
}
