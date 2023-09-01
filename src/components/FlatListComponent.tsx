
import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface ListItem {
  id: string;
  name: string;
  email: string;
  contactInfo?: string;
  address?: string;
  profilePicture?: string;
}

interface FlatListComponentProps {
  users: ListItem[];
}

const FlatListComponent: React.FC<FlatListComponentProps> = ({ users }) => {
  console.log('Rendering FlatListComponent');

  const renderItem = ({ item }: { item: ListItem }) => {
    console.log('Rendering ListItem:', item.id);

    return (
      <View>
        <Text>Name: {item.name}</Text>
        <Text>Email: {item.email}</Text>
        {item.contactInfo && <Text>Contact Info: {item.contactInfo}</Text>}
        {item.address && <Text>Address: {item.address}</Text>}
        {item.profilePicture && <Text>Profile Picture: {item.profilePicture}</Text>}
      </View>
    );
  };

  return (
    <View>
      <Text>Flat List Component</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FlatListComponent;