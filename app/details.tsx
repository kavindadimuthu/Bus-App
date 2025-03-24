import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams } from 'expo-router';
import { buses } from '../constants/buses';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const bus = buses.find((b) => b.id === id);

  if (!bus) {
    return <Text>Bus not found</Text>;
  }

  return (
        <View>
        <Text>{bus.name}</Text>
        <Text>Route: {bus.route}</Text>
        <Text>Timings: {bus.timings}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
});