import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Bus {
  name: string;
  route: string;
}

const BusCard: React.FC<{ bus: Bus }> = ({ bus }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{bus.name}</Text>
      <Text style={styles.route}>{bus.route}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  route: {
    fontSize: 14,
    color: '#666',
  },
});

export default BusCard;