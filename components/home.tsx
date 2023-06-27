import {View, Text} from 'react-native';
import React from 'react';
import {API_URL} from '@env';

export default function home() {
  const baseUrl = API_URL;
  return (
    <View>
      <Text>{baseUrl}</Text>
    </View>
  );
}
