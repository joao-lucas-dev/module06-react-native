import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
