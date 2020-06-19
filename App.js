import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//runs home page
function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ height: '90%', width: "90%", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ height: "10%", width: "90%", alignItems: 'center', justifyContent: 'center' }}><Text>Mouth Piece</Text></View>
        <View style={{ height: "10%", width: "90%", alignItems: 'center', justifyContent: 'center'}}><Button title="PUSH"/></View>
        <View style={{ height: "80%", width: "90%", alignItems: 'center', justifyContent: 'center', borderWidth: 3 }}>
          <View style={{ height: "10%", width: "90%", justifyContent: 'center', borderWidth: 3 }}><Text>Volume</Text></View>
          <View style={{ height: "10%", width: "90%", alignItems: 'center', justifyContent: 'center', borderWidth: 3 }}><Text>Slider</Text></View>
          <View style={{ height: "10%", width: "90%", justifyContent: 'center', borderWidth: 3 }}>
            <Text>Blutooth</Text>
            <Button
              onPress ={() => navigation.navigate('MPSettings')}
              title="Settings"
              color="#fff"
            />
          </View>
          <View style={{ height: "60%", width: "90%", alignItems: 'center', justifyContent: 'center', borderWidth: 3 }}><Text>List</Text></View>
        </View>
      </View>
    </View>
  );
}

//runs Mouth Piece settings page
function MPSettingScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
    </View>
  );
}

//runs amp settings page
function AmpSettingScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
    </View>
  );
}

//runs from here
const Stack = createStackNavigator();

function App({ navigation }) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="MPSettings" component={MPSettingScreen} />
        <Stack.Screen name="AmpSettings" component={AmpSettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
