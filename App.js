/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { MainNavigator } from './src/Navigation/RootNavigator';
import { Provider as StoreProvider } from 'react-redux'
import { store } from './src/Redux/Store';
import {StatusBar} from 'react-native'

const App: () => Node = () => {

  return (
    <StoreProvider store={store}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" animated barStyle={'dark-content'} />
        <MainNavigator />
    </StoreProvider>
  );
};

export default App;
