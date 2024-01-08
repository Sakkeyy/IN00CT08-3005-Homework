import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [hrLimits, setHrLimits] = useState({highest: 0, lowest: 0})

  

  function calculateHr(){ 
    const highest = Math.round((220 - age) * 0.85)
    const lowest = Math.round((220 - age) * 0.65)
    setHrLimits({highest,lowest})
  }

  return (
    <View style={styles.container}>
      

        <Text>Age</Text>
        <TextInput keyboardType='number-pad' value={age}
        onChangeText={(Text) => {setAge(Text) 
        calculateHr()
        }}/>
        <Text>Hr limits</Text>
        <Text>{hrLimits.lowest} - {hrLimits.highest}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 8,
  }
});
