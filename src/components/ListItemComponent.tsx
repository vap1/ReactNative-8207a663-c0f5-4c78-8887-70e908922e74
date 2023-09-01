
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ListItemProps {
  name: string;
  email: string;
  contactInfo?: string;
  address?: string;
  profilePicture?: string;
}

const ListItemComponent: React.FC<ListItemProps> = ({
  name,
  email,
  contactInfo,
  address,
  profilePicture,
}) => {
  console.log('Rendering ListItemComponent');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Contact Info:', contactInfo);
  console.log('Address:', address);
  console.log('Profile Picture:', profilePicture);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      {contactInfo && <Text style={styles.contactInfo}>{contactInfo}</Text>}
      {address && <Text style={styles.address}>{address}</Text>}
      {profilePicture && (
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  contactInfo: {
    fontSize: 16,
    marginTop: 5,
  },
  address: {
    fontSize: 16,
    marginTop: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
  },
});

export default ListItemComponent;