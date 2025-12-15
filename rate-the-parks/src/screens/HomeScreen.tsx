import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Explore & Rate</Text>

      <Button title="Search Places" onPress={() => navigation.navigate('Search')} />
      <Button title="Add a Place" onPress={() => navigation.navigate('AddPlace')} />
      <Button title="My Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
