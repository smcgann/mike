import React, { useState}  from 'react';
import {Alert,StyleSheet, Switch, Button, Navigator, Text,  View } from 'react-native';

export default function App() {
  //runs lock
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.full}>
      <View style={styles.head}>
        <Text>Loud Speaker App</Text>
        <Button title="Settings" onPress = {() => Alert.alert("Settings")}/>
      </View>
      <View style={styles.controls}>
        <Button title="PUSH" onPress = {() => Alert.alert("WORDS OUT")}/>
        <Text>Lock on</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}/>
      </View>
      <View style={styles.extra}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  head: {
    height: '10%',
    width: '100%',
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },

  controls: {
    height: '45%',
    width: '100%',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },

  extra: {
    height: '45%',
    width: '100%',
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
