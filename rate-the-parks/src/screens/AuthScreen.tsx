import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signIn() {
    await supabase.auth.signInWithPassword({ email, password });
  }

  async function signUp() {
    await supabase.auth.signUp({ email, password });
  }

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Rate the Parks</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />

      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
}
