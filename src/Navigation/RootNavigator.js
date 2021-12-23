import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import Splash from '../Screens/Splash';
import Roster from '../Screens/Roster';
import ProgressDialog from '../Components/ProgressDialog';
import { modalScreens, screens } from './Constants';
import styles from './style';
import { colorCode } from '../Utilities/AppConstants';
import Details from '../Screens/Roster/components/Details';
const Stack = createStackNavigator();
export const navigationRef = React.createRef();
const screenHeight = Dimensions.get('screen').height;

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={screens.SPLASH}
      screenOptions={({ navigation }) => ({
        headerMode: 'screen',
        headerBackTitleVisible: false,
        headerStyle: { elevation: 0, backgroundColor: colorCode.GREEN, },
        headerTitleAlign: 'left',
        headerLeftContainerStyle: { marginLeft: 20 },
        headerTitleStyle: { fontSize: 18, fontFamily: "Muli-Bold", color: colorCode.WHITE },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <Stack.Screen
        name={screens.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.ROSTER}
        component={Roster}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}

function ModalStack({ style }) {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: true,
          gestureEnabled: true,
          gestureResponseDistance: {
            vertical: 500,
          },
          cardStyle: { backgroundColor: 'transparent' },
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              translateY: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [screenHeight, 200, 50, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.7],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
        mode="modal">
        <Stack.Screen name={'screens'} component={StackNavigator}></Stack.Screen>
        <Stack.Screen name={modalScreens.DETAILS} component={Details} />
        <Stack.Screen
          name="ProgressDialog"
          component={ProgressDialog}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: 'transparent' },
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.5, 0.9, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.7],
                  extrapolate: 'clamp',
                }),
              },
            }),
          }}
        />
      </Stack.Navigator>
    </Animated.View>
  )
}

function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          headerMode: 'screen',
          headerShown: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'left',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerTitleStyle: { fontSize: 18, fontFamily: "Muli-Bold", color: colorCode.WHITE },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}>
        <Stack.Screen
          name={"Home"} component={ModalStack}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { MainNavigator };
