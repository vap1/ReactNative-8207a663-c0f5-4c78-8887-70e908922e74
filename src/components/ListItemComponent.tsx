
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { User } from '../types/Types';

const ListItemComponent: React.FC<{ user: User }> = ({ user }) => {
  console.log('ListItemComponent.tsx: Start');

  console.log('ListItemComponent.tsx: user', user);

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.contactInfo}>{user.contactInfo}</Text>
        <Text style={styles.address}>{user.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  contactInfo: {
    fontSize: 14,
    color: '#888',
  },
  address: {
    fontSize: 14,
    color: '#888',
  },
});

console.log('ListItemComponent.tsx: End');

export default ListItemComponent;