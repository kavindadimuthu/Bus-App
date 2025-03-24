import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  const username = "Kavinda";
  const currentLocation = "Reid avenue, Cinnamon grands, Colombo";

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar style="light" translucent={true} />
      
      {/* Header with Bus Image */}
      <View style={styles.headerContainer}>
        <Image 
          source={require('../../assets/images/bus-bg.jpg')} 
          style={styles.headerImage} 
        />
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        {/* Welcome Message */}
        <LinearGradient
          colors={['#1a73e8', '#1a73e8']}
          style={styles.welcomeContainer}
        >
          <Text style={styles.welcomeTitle}>Good Morning, {username}</Text>
          <Text style={styles.welcomeSubtitle}>
            May your day be as bright as the sun in the morning.
          </Text>
        </LinearGradient>
      </View>
      
      {/* Location Card */}
      <View style={styles.card}>
        <View style={styles.mapContainer}>
          <Image 
            source={require('../../assets/images/google-map.jpg')} 
            style={styles.mapImage} 
          />
          <View style={styles.locationDot} />
        </View>
        <Text style={styles.cardTitle}>Your current location</Text>
        <Text style={styles.locationText}>{currentLocation}</Text>
      </View>
      
      {/* Search Card */}
      <TouchableOpacity style={styles.searchCard}>
        <View style={styles.searchRow}>
          <View style={styles.searchIconContainer}>
            <MaterialIcons name="location-on" size={20} color="#ff5722" />
          </View>
          <Text style={styles.searchText}>Select location</Text>
          <MaterialIcons name="chevron-right" size={24} color="#aaa" />
        </View>
      </TouchableOpacity>
      
      {/* Feature Icons */}
      <View style={styles.featureContainer}>
        <View style={styles.featureRow}>
          <TouchableOpacity style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <FontAwesome5 name="bus" size={20} color="white" />
            </View>
            <Text style={styles.featureText}>Search{'\n'}buses</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="location" size={24} color="white" />
            </View>
            <Text style={styles.featureText}>Search{'\n'}routes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="person" size={24} color="white" />
            </View>
            <Text style={styles.featureText}>Book{'\n'}tickets</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <MaterialIcons name="local-offer" size={24} color="white" />
            </View>
            <Text style={styles.featureText}>Track{'\n'}bus</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    position: 'relative',
    height: 280,
  },
  headerImage: {
    width: '100%',
    height: 230,
    position: 'absolute',
    top: -30,
    // bottom: 0,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  welcomeContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    alignItems: 'center',
  },
  welcomeTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'left',
  },
  welcomeSubtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mapContainer: {
    position: 'relative',
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  mapImage: {
    width: '100%',
    height: 120,
  },
  locationDot: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: '#1a73e8',
    borderRadius: 10,
    top: '50%',
    left: '25%',
    marginTop: -10,
    marginLeft: -10,
    borderWidth: 3,
    borderColor: 'white',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 13,
    color: '#555',
  },
  searchCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconContainer: {
    marginRight: 12,
  },
  searchText: {
    flex: 1,
    fontSize: 15,
    color: '#777',
  },
  featureContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureItem: {
    alignItems: 'center',
    width: '23%',
  },
  featureIconContainer: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: '#1a73e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
});

export default HomeScreen;