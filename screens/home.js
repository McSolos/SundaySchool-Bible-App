// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Bible App</Text>
        <TouchableOpacity style={styles.searchIcon}
        onPress={() => navigation.navigate('VerseSearchResult')}>
          <Text style={styles.searchText}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Bible App</Text>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('VerseSearchResult')}
        >
          <Text style={styles.searchButtonText}>Go to Verse Search</Text>
        </TouchableOpacity>
      </View> */}

      {/* Daily Verse Section */}
      <View style={styles.dailyVerseContainer}>
        <Text style={styles.dailyVerseTitle}>Verse of the Day</Text>
        <Text style={styles.dailyVerseText}>
          "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11
        </Text>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Access Sections */}
      <Text style={styles.quickAccessTitle}>Quick Access</Text>
      <View style={styles.quickAccessContainer}>

        <TouchableOpacity 
          style={styles.quickAccessButton}
          onPress={() => navigation.navigate('OldTestament')}>
          <Text style={styles.quickAccessText}>Old Testament</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.quickAccessButton}
          onPress={() => navigation.navigate('NewTestament')}>
          <Text style={styles.quickAccessText}>New Testament</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.quickAccessButton}
          onPress={() => navigation.navigate('BookmarksAndFavourites')}>
          <Text style={styles.quickAccessText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.quickAccessButton}
          onPress={() => navigation.navigate('Notes')}
          >
          <Text style={styles.quickAccessText}>Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.quickAccessButton}
          onPress={() => navigation.navigate('Settings')}
          >
          <Text style={styles.quickAccessText}>Go to Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.quickAccessButton}
          onPress={() => navigation.navigate('BibleReading')}
          >
          <Text style={styles.quickAccessText}>Read</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4b4b4b',
  },
  searchIcon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#e6e6e6',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  searchText: {
    fontSize: 24,
    color: '#4b4b4b',
  },

  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  searchButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  
  dailyVerseContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dailyVerseTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  dailyVerseText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  shareButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#4a90e2',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  quickAccessTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickAccessButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickAccessText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default HomeScreen;
