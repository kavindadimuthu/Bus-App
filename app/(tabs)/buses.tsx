import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import BusCard from '../../components/BusCard';
import { buses } from '../../constants/buses';

export default function HomeTab() {
  return (
    <View style={{ flex: 1, paddingTop: 75}}>
      <Text>Available Buses</Text>
      <FlatList
        data={buses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/details?id=${item.id}`} asChild>
            <Pressable>
              <BusCard bus={item} />
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}