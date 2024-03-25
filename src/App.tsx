import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { STORYBOOK_ENABLED } from '@env';
import { ThemeProvider } from './theme/context/ThemeProvider/ThemeProvider.tsx';
import { useTheme } from './theme/hooks/useTheme.ts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApplicationNavigation } from './navigations/auth/ApplicationNavigation.tsx';
import { Provider } from 'react-redux';
import { persistedStore, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { WibuToast } from './ui/WibuToast/WibuToast.tsx';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const { Layouts } = useTheme();
  if (STORYBOOK_ENABLED === 'true') {
    const StoryBook = require('../.storybook').default;
    return <StoryBook />;
  }
  return (
    <SafeAreaView style={[Layouts.fullSize]}>
      <ApplicationNavigation />
    </SafeAreaView>
  );
};

let AppEntryPoint = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider>
          <App />
          <WibuToast />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default AppEntryPoint;
