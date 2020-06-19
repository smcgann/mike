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
        <View style={{ height: "80%", width: "90%", alignItems: 'center', justifyContent: 'center', borderWidth: 3 }}><Text>Volume and Blutooth</Text></View>
      </View>
    </View>
  );
}

//runs settings page
function SettingScreen({ navigation }) {

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
        <Stack.Screen name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress ={() => navigation.navigate('Settings')}
                title="Settings"
                color="#fff"
              />
            ),
            title: 'MouthPiece',
            headerTitleAlign: 'center',
          })}
      />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
