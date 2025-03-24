import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#1a73e8" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      
      {/* Settings Options */}
      <View style={styles.settingsContainer}>
        {/* Notification Settings */}
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Notification settings</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        {/* Theme */}
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Theme</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        {/* Language */}
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Language</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        {/* Delete Account */}
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.deleteAccountText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#1a73e8',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  settingItem: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  settingText: {
    fontSize: 14,
    color: '#555',
  },
  deleteAccountText: {
    fontSize: 14,
    color: '#ff5252',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default SettingsScreen;