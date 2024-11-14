import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

const ChapterDetailsScreen = ({ route }) => {
  const { book, chapter } = route.params;
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapterData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://bible-api.com/${book}%20${chapter}`);
        const data = await response.json();
        setVerses(data.verses);
      } catch (error) {
        console.error('Error fetching verses:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchChapterData();
  }, [book, chapter]);
  

  const renderVerse = ({ item }) => (
    <Text style={styles.verseText}>
      <Text style={styles.verseNumber}>{item.verse} </Text>
      {item.text}
    </Text>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={verses}
          renderItem={renderVerse}
          keyExtractor={(item) => item.verse.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  verseText: {
    fontSize: 16,
    marginBottom: 10,
  },
  verseNumber: {
    fontWeight: 'bold',
  },
});

export default ChapterDetailsScreen;
