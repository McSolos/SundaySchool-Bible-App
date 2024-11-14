// screens/NotesScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const NotesScreen = () => {
  // Sample data for notes (this can be replaced by dynamic data later)
  const [notes, setNotes] = useState([
    { id: '1', book: 'John', chapter: 3, verse: 16, note: 'This verse speaks of God\'s love for the world.' },
    { id: '2', book: 'Psalm', chapter: 23, verse: 1, note: 'The Lord is my shepherd, I shall not want.' },
  ]);

  const [newNote, setNewNote] = useState('');
  const [selectedVerse, setSelectedVerse] = useState(null);

  const renderNoteItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => alert(`Navigating to ${item.book} ${item.chapter}:${item.verse}`)}>
      <Text style={styles.itemText}>
        {item.book} {item.chapter}:{item.verse} - {item.note}
      </Text>
    </TouchableOpacity>
  );

  const handleAddNote = () => {
    if (newNote.trim() === '' || !selectedVerse) return;

    const newNoteData = {
      id: `${notes.length + 1}`,
      book: selectedVerse.book,
      chapter: selectedVerse.chapter,
      verse: selectedVerse.verse,
      note: newNote,
    };

    setNotes([...notes, newNoteData]);
    setNewNote('');
    setSelectedVerse(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Notes</Text>
        {notes.length === 0 ? (
          <Text style={styles.noItemsText}>No notes yet.</Text>
        ) : (
          <FlatList
            data={notes}
            renderItem={renderNoteItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        )}
      </View>

      {/* Section to add a new note */}
      <View style={styles.addNoteSection}>
        <Text style={styles.addNoteTitle}>Add a Note</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your note here..."
          value={newNote}
          onChangeText={setNewNote}
          multiline
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddNote}
        >
          <Text style={styles.addButtonText}>Add Note</Text>
        </TouchableOpacity>
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
  addNoteSection: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  addNoteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default NotesScreen;
