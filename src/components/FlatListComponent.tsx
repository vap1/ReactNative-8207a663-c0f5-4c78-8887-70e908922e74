
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { User } from '../types/Types';

const FlatListComponent: React.FC<{ users: User[] }> = ({ users }) => {
  console.log('FlatListComponent: Start');

  const renderItem = ({ item }: { item: User }) => {
    console.log('FlatListComponent: renderItem - Start');
    console.log('FlatListComponent: renderItem - Item:', item);

    return (
      <View>
        <Text>Name: {item.name}</Text>
        <Text>Email: {item.email}</Text>
        <Text>Contact Info: {item.contactInfo}</Text>
        <Text>Address: {item.address}</Text>
        <Text>Profile Picture: {item.profilePicture}</Text>
      </View>
    );
  };

  console.log('FlatListComponent: End');

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.email}
    />
  );
};

export default FlatListComponent;