import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AddPlaceScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  async function submit() {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    await supabase.from('places').insert({
      name,
      category,
      location_text: location,
      created_by: user.id,
    });

    navigation.goBack();
  }

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 20 }}>Add a New Place</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Category (restaurant, pool, etc.)" value={category} onChangeText={setCategory} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} />

      <Button title="Save Place" onPress={submit} />
    </View>
  );
}
