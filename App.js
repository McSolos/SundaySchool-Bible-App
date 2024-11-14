import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home'; // Adjust this path as necessary
import BibleReadingScreen from './screens/BibleReadingScreen'; // Adjust this path as necessary
import VerseSearchResultScreen from './screens/VerseSearchResultScreen'; // Adjust this path as necessary
import BookmarksAndFavouritesScreen from './screens/BookmarksAndFavouritesScreen'; // Adjust this path as necessary
import NotesScreen from './screens/NotesScreen'; 
import SettingsScreen from './screens/SettingsScreen';
import OldTestamentScreen from './screens/OldTestamentScreen';
import NewTestamentScreen from './screens/NewTestamentScreen';
import ChapterDetails from './screens/ChapterDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BibleReading" component={BibleReadingScreen} />
        <Stack.Screen name="VerseSearchResult" component={VerseSearchResultScreen} />
        <Stack.Screen name="BookmarksAndFavourites" component={BookmarksAndFavouritesScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="OldTestament" component={OldTestamentScreen} />
        <Stack.Screen name="NewTestament" component={NewTestamentScreen} />
        <Stack.Screen name="ChapterDetails" component={ChapterDetails} />
      </Stack.Navigator>
    </NavigationContainer>
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
