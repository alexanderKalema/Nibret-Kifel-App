/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import RootNavigation from './navigation';
import GlobalProvider from './src/services/provider';

export default function App() {
  return(
  <GlobalProvider>
    <RootNavigation />
  </GlobalProvider>
  );
}
