import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const newTestamentBooks = [
  'Matthew', 'Mark', 'Luke', 'John', 'Acts', 
  'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
  'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
  '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 
  'James', '1 Peter', '2 Peter', '1 John', '2 John', 
  '3 John', 'Jude', 'Revelation'
];

const chaptersPerBook = {
  Matthew: 28,
  Mark: 16,
  Luke: 24,
  John: 21,
  Acts: 28,
  Romans: 16,
  '1 Corinthians': 16,
  '2 Corinthians': 13,
  Galatians: 6,
  Ephesians: 6,
  Philippians: 4,
  Colossians: 4,
  '1 Thessalonians': 5,
  '2 Thessalonians': 3,
  '1 Timothy': 6,
  '2 Timothy': 4,
  Titus: 3,
  Philemon: 1,
  Hebrews: 13,
  James: 5,
  '1 Peter': 5,
  '2 Peter': 3,
  '1 John': 5,
  '2 John': 1,
  '3 John': 1,
  Jude: 1,
  Revelation: 22,
};

const NewTestamentScreen = ({ navigation }) => {
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
        data={newTestamentBooks}
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

export default NewTestamentScreen;
