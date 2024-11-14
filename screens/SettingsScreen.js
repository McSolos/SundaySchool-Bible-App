// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Import from the community package

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState('English');

  const handleDarkModeChange = (value) => {
    setIsDarkMode(value);
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const saveSettings = () => {
    // Here, you can store settings in AsyncStorage or a database
    alert('Settings saved!');
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>App Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={handleDarkModeChange} />
      </View>

      {/* Font Size Slider */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Font Size: {fontSize}</Text>
        <Slider
          minimumValue={12}
          maximumValue={24}
          step={1}
          value={fontSize}
          onValueChange={handleFontSizeChange}
          style={styles.slider}
        />
      </View>

      {/* Language Selector */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Language</Text>
        <TextInput
          style={[styles.input, isDarkMode && styles.darkInput]}
          value={language}
          onChangeText={handleLanguageChange}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={saveSettings}>
        <Text style={styles.saveButtonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  darkMode: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
  darkInput: {
    backgroundColor: '#555',
    color: '#fff',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flex: 1,
  },
  slider: {
    width: 200,
    height: 40,
  },
  saveButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default SettingsScreen;
