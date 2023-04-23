import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO</Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 30,
    backgroundColor: '#393E46'
    
  },
  container: {
    flex: 1,
    backgroundColor: '#00ADB5',
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  }, });

export default Layout;
