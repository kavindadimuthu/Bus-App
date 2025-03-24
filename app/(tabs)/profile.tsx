import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const userName = "Olivia Rhye";
  const userEmail = "oliviarhye@gmail.com";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#1a73e8" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        
        {/* User Info */}
        <View style={styles.userInfoContainer}>
          <Image 
            source={require('../../assets/images/sample-dp.jpeg')} 
            style={styles.profileImage} 
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userEmail}>{userEmail}</Text>
          </View>
        </View>
      </View>
      
      {/* Profile Options - First Card */}
      <View style={styles.optionsCard}>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>My Account</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>My Bookings</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Wallet</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Favourite routes</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Community</Text>
        </TouchableOpacity>
      </View>
      
      {/* Profile Options - Second Card */}
      <View style={styles.optionsCard}>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Promotions</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1a73e8',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  userTextContainer: {
    marginLeft: 12,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  optionsCard: {
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
  optionItem: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  optionText: {
    fontSize: 14,
    color: '#555',
  },
  logOutText: {
    fontSize: 14,
    color: '#ff5252',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default ProfileScreen;