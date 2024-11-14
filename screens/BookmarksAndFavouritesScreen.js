// screens/BookmarksAndFavouritesScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BookmarksAndFavouritesScreen = () => {
  // Sample data for bookmarks and favourites
  const [bookmarks, setBookmarks] = useState([
    { id: '1', book: 'John', chapter: 3, verse: 16, content: 'For God so loved the world...' },
    { id: '2', book: 'Psalm', chapter: 23, verse: 1, content: 'The Lord is my shepherd...' },
  ]);

  const [favourites, setFavourites] = useState([
    { id: '3', book: 'Matthew', chapter: 5, verse: 9, content: 'Blessed are the peacemakers...' },
    { id: '4', book: 'John', chapter: 4, verse: 24, content: 'God is spirit, and his worshipers must worship in spirit and truth.' },
  ]);

  const renderBookmarkItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => alert(`Navigating to ${item.book} ${item.chapter}:${item.verse}`)}>
      <Text style={styles.itemText}>
        {item.book} {item.chapter}:{item.verse} - {item.content}
      </Text>
    </TouchableOpacity>
  );

  const renderFavouriteItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => alert(`Navigating to ${item.book} ${item.chapter}:${item.verse}`)}>
      <Text style={styles.itemText}>
        {item.book} {item.chapter}:{item.verse} - {item.content}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Bookmarks Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bookmarks</Text>
        {bookmarks.length === 0 ? (
          <Text style={styles.noItemsText}>No bookmarks yet.</Text>
        ) : (
          <FlatList
            data={bookmarks}
            renderItem={renderBookmarkItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        )}
      </View>

      {/* Favourites Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favourites</Text>
        {favourites.length === 0 ? (
          <Text style={styles.noItemsText}>No favourites yet.</Text>
        ) : (
          <FlatList
            data={favourites}
            renderItem={renderFavouriteItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  noItemsText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
  },
  list: {
    marginTop: 10,
  },
});

export default BookmarksAndFavouritesScreen;
