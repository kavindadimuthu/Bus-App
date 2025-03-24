import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Sample location data
const SAVED_LOCATIONS: { id: string; name: string; icon: 'home-outline' | 'briefcase-outline' | 'person-outline' }[] = [
  { id: 'home', name: 'Our Home', icon: 'home-outline' },
  { id: 'office', name: 'My Office', icon: 'briefcase-outline' },
  { id: 'contact', name: 'Danila H', icon: 'person-outline' }
];

const DESTINATIONS = [
  {
    id: 'monumen-nasional',
    name: 'Monumen Nasional',
    address: 'RT.5/RW.2, Gambir, Central Jakarta City, Jakarta 10110'
  },
  {
    id: 'central-park-mall',
    name: 'Central Park Mall',
    address: 'Letjen S. Parman St No.Kavling 28, North Tanjung Duren, Grogol petamburan, West Jakarta City, Jakarta 14470'
  },
  {
    id: 'stasiun-gambir',
    name: 'Stasiun Gambir',
    address: 'Jl. Medan Merdeka Tim. No.1, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110'
  }
];

const ROUTE_TYPES = ['All Type', 'Normal', 'Semi', 'Luxury', 'XL'];

const BusRouteSearch = () => {
  const [currentLocation, setCurrentLocation] = useState('Your current location');
  const [destination, setDestination] = useState('');
  const [start, setStart] = useState('');
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedRouteType, setSelectedRouteType] = useState('All Type');

  const handleStartLocationSearch = (text: string) => {
    setStart(text);
  };
  const handleEndLocationSearch = (text: string) => {
    setDestination(text);
  };

  const handleRouteTypeSelect = (type: string) => {
    setSelectedRouteType(type);
  };

  const renderSavedLocations = () => {
    return SAVED_LOCATIONS.map((location) => (
      <TouchableOpacity 
        key={location.id} 
        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}
      >
        <Ionicons name={location.icon} size={20} color="gray" />
        <Text style={{ marginLeft: 5 }}>{location.name}</Text>
      </TouchableOpacity>
    ));
  };

  const renderDestinations = () => {
    return DESTINATIONS.map((dest) => (
      <TouchableOpacity 
        key={dest.id} 
        style={{ 
          backgroundColor: 'white', 
          padding: 15, 
          borderBottomWidth: 1, 
          borderBottomColor: '#eee' 
        }}
      >
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{dest.name}</Text>
        <Text style={{ color: 'gray' }}>{dest.address}</Text>
      </TouchableOpacity>
    ));
  };

  const renderFilterModal = () => {
    return (
      <View style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'white', 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        padding: 20 
      }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Filter</Text>
        <Text style={{ marginBottom: 10 }}>Route Type</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {ROUTE_TYPES.map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => handleRouteTypeSelect(type)}
              style={{
                backgroundColor: selectedRouteType === type ? '#007bff' : '#f0f0f0',
                padding: 10,
                borderRadius: 20,
                margin: 5
              }}
            >
              <Text style={{ 
                color: selectedRouteType === type ? 'white' : 'black',
                fontWeight: 'bold'
              }}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity 
            style={{ 
              backgroundColor: '#f0f0f0', 
              padding: 15, 
              borderRadius: 10,
              flex: 1,
              marginRight: 10
            }}
            onPress={() => {
              setSelectedRouteType('All Type');
              setIsFilterModalVisible(false);
            }}
          >
            <Text style={{ textAlign: 'center' }}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ 
              backgroundColor: '#007bff', 
              padding: 15, 
              borderRadius: 10,
              flex: 1
            }}
            onPress={() => setIsFilterModalVisible(false)}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Apply filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 15, 
        backgroundColor: '#007bff' 
      }}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ 
          color: 'white', 
          fontSize: 18, 
          fontWeight: 'bold', 
          marginLeft: 15 
        }}>
          Search for route details
        </Text>
        <TouchableOpacity 
          style={{ marginLeft: 'auto' }}
          onPress={() => setIsFilterModalVisible(true)}
        >
          <Ionicons name="filter" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ 
          backgroundColor: 'white', 
          padding: 15, 
          margin: 15, 
          borderRadius: 10 
        }}>

          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            borderWidth: 1, 
            borderColor: '#ddd', 
            borderRadius: 10, 
            padding: 10, 
            marginBottom: 10
          }}>
            <Ionicons name="location" color="green" size={24} />
            <TextInput
              placeholder={currentLocation}
              value={start}
              onChangeText={handleStartLocationSearch}
              style={{ flex: 1, marginLeft: 10 }}
            />
          </View>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            borderWidth: 1, 
            borderColor: '#ddd', 
            borderRadius: 10, 
            padding: 10 
          }}>
            <Ionicons name="location" color="red" size={24} />
            <TextInput
              placeholder="Search for a destination"
              value={destination}
              onChangeText={handleEndLocationSearch}
              style={{ flex: 1, marginLeft: 10 }}
            />
          </View>

          <View style={{ 
            flexDirection: 'row', 
            marginTop: 15, 
            alignItems: 'center' 
          }}>
            {renderSavedLocations()}
          </View>
        </View>

        {renderDestinations()}
      </ScrollView>

      {isFilterModalVisible && renderFilterModal()}
    </SafeAreaView>
  );
};

export default BusRouteSearch;