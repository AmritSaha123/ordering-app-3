import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import StoryScreen from "../screens/StoryScreen";
import CreateStory from "../screens/CreateStory";
import DisplayReceivedOrder from "../screens/DisplayReceivedOrder";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Create Story" component={CreateStory} />
      <Stack.Screen name="DisplayReceivedOrder" component={DisplayReceivedOrder} />
</Stack.Navigator>
  );
};

export default StackNavigator;
