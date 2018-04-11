import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


const BackPage = () =>
  (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello backside</Text>
      <TouchableOpacity onPress={() => { Actions.pop(); }}>
        <Text>
          About
        </Text>
      </TouchableOpacity>
    </View>
  );


export default BackPage;
