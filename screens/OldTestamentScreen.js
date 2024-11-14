// screens/OldTestamentScreen.js
import React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const oldTestamentBooks = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings',
  '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah',
  'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',
  'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 
  'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 
  'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'
];

const chaptersPerBook = {
  Genesis : 50,
  Exodus : 40,
  Leviticus : 27,
  Numbers : 36,
  Deuteronomy : 34,
  Joshua : 24,
  Judges : 21,
  Ruth : 4,
  '1 Samuel' : 31,
  '2 Samuel' : 24,
  '1 Kings' : 22,
  '2 Kings' : 25,
  '1 Chronicles' : 29,
  '2 Chronicles' : 36,
  Ezra : 10,
  Nehemiah : 13,
  Esther : 10,
  Job : 42,
  Psalms : 150,
  Proverbs : 31,
  Ecclesiastes : 12,
  SongOfSolomon : 8,
  Isaiah : 66,
  Jeremiah : 52,
  Lamentations : 5,
  Ezekiel : 48,
  Daniel : 12,
  Hosea : 14,
  Joel : 3,
  Amos : 9,
  Obadiah : 1,
  Jonah : 4,
  Micah : 7,
  Nahum : 3,
  Habakkuk : 3,
  Zephaniah : 3,
  Haggai : 2,
  Zechariah : 14,
  Malachi : 4
}

const OldTestamentScreen = ({ navigation }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const renderBook = ({ item }) => (
    <View>
      <TouchableOpacity 
        style={styles.bookItem} 
        onPress={() => setSelectedBook(selectedBook === item ? null : item)}
      >
        <Text style={styles.bookText}>{item}</Text>
      </TouchableOpacity>
      {selectedBook === item && (
        <View style={styles.chaptersContainer}>
          {[...Array(chaptersPerBook[item])].map((_, i) => (
            <TouchableOpacity 
              key={i + 1} 
              style={styles.chapterItem} 
              onPress={() => navigation.navigate('ChapterDetails', { book: item, chapter: i + 1 })}
            >
              <Text style={styles.chapterText}>{i + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={oldTestamentBooks}
        renderItem={renderBook}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  bookItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bookText: {
    fontSize: 18,
    color: '#333',
  },
  chaptersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  chapterItem: {
    width: 40, // Adjust width as needed
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  chapterText: {
    fontSize: 16,
    color: '#555',
  },
});


export default OldTestamentScreen;
