import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle="dark-content" />
      <Text style={{ fontWeight: 'bold' }}>ONE WEEK CHALLENGING COMING..SOON</Text>
    </View>
  </SafeAreaView>
);

export default App;
