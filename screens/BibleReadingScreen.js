import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getBibleVerse } from '../databases'; // Adjust the path if needed
// import { getBibleVerse } from '../utils/database';


const BibleReadingScreen = () => {
  const [verseText, setVerseText] = useState('');

  useEffect(() => {
    // Load an example verse, such as Genesis 1:1
    fetchVerse('Genesis', 1, 1);
  }, []);

  const fetchVerse = async (book, chapter, verse) => {
    try {
      const text = await getBibleVerse(book, chapter, verse);
      setVerseText(text);
    } catch (error) {
      setVerseText('Error loading verse');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.verseText}>{verseText}</Text>
      <Button title="Load John 3:16" onPress={() => fetchVerse(1, 3, 16)} />
    </View>
  );
};

// // screens/BibleReadingScreen.js
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Slider } from 'react-native';

// const BibleReadingScreen = ({ route }) => {
//   // Get the passed parameters (book, chapter, verse)
//   const { book, chapter, verse, content } = route.params; // Assume content is an array of verses

//   // State to adjust font size
//   const [fontSize, setFontSize] = useState(16);

//   return (
//     <View style={styles.container}>
//       {/* Navigation Bar */}
//       <View style={styles.navBar}>
//         <TouchableOpacity style={styles.navButton}>
//           <Text style={styles.navText}>{"<"}</Text>
//         </TouchableOpacity>
//         <Text style={styles.navText}>{book} {chapter}:{verse}</Text>
//         <TouchableOpacity style={styles.navButton}>
//           <Text style={styles.navText}>{">"}</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Bible Text */}
//       <ScrollView style={styles.bibleTextContainer}>
//         {content.map((verse, index) => (
//           <Text key={index} style={[styles.verseText, { fontSize }]}>
//             {verse}
//           </Text>
//         ))}
//       </ScrollView>

//       {/* Font Size Slider */}
//       <View style={styles.fontSizeContainer}>
//         <Text style={styles.fontSizeLabel}>Font Size</Text>
//         <Slider
//           style={styles.slider}
//           minimumValue={12}
//           maximumValue={24}
//           value={fontSize}
//           onValueChange={(value) => setFontSize(value)}
//           step={1}
//         />
//       </View>

//       {/* Bookmark & Highlight Buttons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Bookmark</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Highlight</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 50,
  },
  navText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4b4b4b',
  },
  bibleTextContainer: {
    marginBottom: 20,
  },
  verseText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
  fontSizeContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  fontSizeLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  slider: {
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default BibleReadingScreen;
