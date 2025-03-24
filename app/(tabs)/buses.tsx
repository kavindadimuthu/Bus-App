import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

// Sample bus route data
const busRoutes = [
  {
    id: 1,
    from: 'Awissawella, WP',
    to: 'Embilipitiya, SG',
    routes: [
      {
        id: 'RN-03',
        type: 'Normal',
        operator: 'Dhanushka Super line',
        departureTime: '02:50 pm',
        arrivalTime: '06:05 PM',
        price: 380,
        acType: 'Non A/C'
      },
      {
        id: 'RN-69',
        type: 'Semi-Luxury',
        operator: 'Gamage Motors',
        departureTime: '03:15 pm',
        arrivalTime: '06:15 PM',
        price: 540,
        acType: 'Non A/C'
      }
    ]
  }
];

interface Route {
  id: string;
  type: string;
  operator: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  acType: string;
}

const BusRouteCard = ({ route }: { route: Route }) => (
  <View style={styles.routeCard}>
    <View style={styles.routeCardHeader}>
      <Text style={styles.routeNumber}>{route.id}</Text>
      <View style={styles.routeTypeTag}>
        <Text style={styles.routeTypeText}>{route.type}</Text>
      </View>
    </View>
    <View style={styles.routeCardContent}>
      <Text style={styles.operatorText}>{route.operator}</Text>
      <View style={styles.timeAndPriceContainer}>
        <View>
          <Text style={styles.departureTime}>{route.departureTime}</Text>
          <Text style={styles.acType}>{route.acType}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>LKR {route.price}</Text>
        </View>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.viewDetailsButtonText}>View trip details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowButtonText}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function BusesTab() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <LinearGradient 
        colors={['#3B82F6', '#2563EB']} 
        style={styles.headerContainer}
      >
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>
            {busRoutes[0].from} to {busRoutes[0].to}
          </Text>
          <Text style={styles.headerSubtitle}>March 12 - March 16</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={24} color="white" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Date Selector */}
      <View style={styles.dateScrollContainer}>
        {['March 12', 'March 13', 'March 14', 'March 15', 'March 16'].map((date) => (
          <TouchableOpacity 
            key={date} 
            style={[
              styles.dateButton, 
              date === 'March 12' ? styles.activeDateButton : styles.inactiveDateButton
            ]}
          >
            <Text style={[
              styles.dateButtonText, 
              date === 'March 12' ? styles.activeDateButtonText : styles.inactiveDateButtonText
            ]}>
              {date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Routes List */}
      <View style={styles.routesListContainer}>
        {busRoutes[0].routes.map((route) => (
          <BusRouteCard key={route.id} route={route} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6'
  },
  headerContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 12
  },
  dateScrollContainer: {
    flexDirection: 'row',
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  dateButton: {
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20
  },
  activeDateButton: {
    backgroundColor: 'white'
  },
  inactiveDateButton: {
    backgroundColor: '#3B82F6',

  },
  dateButtonText: {
    fontSize: 12
  },
  activeDateButtonText: {
    color: '#3B82F6'
  },
  inactiveDateButtonText: {
    color: 'white'
  },
  routesListContainer: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  routeCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  routeCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  routeNumber: {
    fontWeight: 'bold',
    fontSize: 16
  },
  routeTypeTag: {
    backgroundColor: '#F97316',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  routeTypeText: {
    color: 'white',
    fontSize: 12
  },
  routeCardContent: {
    padding: 16
  },
  operatorText: {
    color: '#6B7280',
    marginBottom: 8
  },
  timeAndPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  departureTime: {
    fontSize: 14,
    color: '#4B5563'
  },
  acType: {
    fontSize: 12,
    color: '#9CA3AF'
  },
  priceContainer: {
    alignItems: 'flex-end'
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2563EB'
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },
  viewDetailsButton: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#3B82F6',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  viewDetailsButtonText: {
    color: '#3B82F6'
  },
  bookNowButton: {
    flex: 1,
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  bookNowButtonText: {
    color: 'white'
  },
  bottomNavActiveText: {
    color: '#3B82F6',
    fontSize: 10,
    marginTop: 4
  },
  bottomNavInactiveText: {
    color: 'gray',
    fontSize: 10,
    marginTop: 4
  }
});