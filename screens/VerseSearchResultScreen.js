import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const VerseSearchResultScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = '3bdaf4de742d8cddbf6e688605363656';
  const BIBLE_ID = 'de4e12af7f28f599-02'; // Example Bible ID for KJV

  const searchVerses = async () => {
    if (!searchQuery.trim()) return;
  
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/search?query=${encodeURIComponent(searchQuery)}`,
        {
          headers: {
            'api-key': API_KEY,
          },
        }
      );
      const data = await response.json();
      const results = data.data.passages.map((passage) => ({
        book: passage.reference.split(' ')[0],
        chapter: passage.reference.split(' ')[1].split(':')[0],
        verse: passage.reference.split(' ')[1].split(':')[1],
        content: passage.content.replace(/<[^>]*>/g, ''), // Remove HTML tags from content
      }));
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSearch = () => {
    searchVerses();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() =>
        navigation.navigate('BibleReading', {
          book: item.book,
          chapter: item.chapter,
          verse: item.verse,
          content: [item.content],
        })
      }
    >
      <Text style={styles.resultText}>
        {item.book} {item.chapter}:{item.verse} - {item.content}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for verses..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {!loading && searchResults.length === 0 && searchQuery ? (
        <Text style={styles.noResultsText}>No results found for "{searchQuery}"</Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={styles.resultsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsList: {
    marginTop: 20,
  },
  resultItem: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  noResultsText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 18,
  },
});

export default VerseSearchResultScreen;
