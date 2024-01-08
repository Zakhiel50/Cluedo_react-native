import React from 'react';
import { Text, View, StatusBar, Button } from 'react-native';
import Weapons from './components/Weapons';
import style from './components/Style';
import { NavigationContainer } from '@react-navigation/native';
import Suspects from './components/Suspects';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Rooms from './components/Rooms';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Note from "./components/Note"
import Hide from "./components/Hide"

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <View style={{flex: 1, backgroundColor: "#5F8F32"}}>
      <Text style={style.title}>Cluedo</Text>
      <View style={style.container}>
      </View>
      <View style={{flex: 1,}}>
        <StatusBar hidden= {false} />
        <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Suspects') {
                iconName = "person"
                  
              // } else if (route.name === .title) {
              //   iconName = "search";
              } if (route.name === 'Armes') {
                iconName = "hammer";
              } if (route.name === "Salles") {
                iconName = "location"
              } if (route.name === "Notes") {
                iconName = "book"
              } if (route.name === "Hide") {
                iconName = "eye-sharp"
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            tabBarStyle: {backgroundColor: "#477A55"},
            headerStyle: {backgroundColor: "#477A55"},
            headerTitleAlign: "center",
            headerTitle:  {marginBottom: 100},
            headerTitleStyle: {color: "white", fontWeight: 900, fontSize: 30 , fontFamily: "Roboto"},
            
          })}
          >
            <Tab.Screen name="Suspects" component={Suspects} />
            <Tab.Screen name="Armes" component={Weapons} />
            <Tab.Screen name="Salles" component={Rooms} />
            <Tab.Screen name="Notes" component={Note} />
            <Tab.Screen name="Hide" component={Hide} />

          </Tab.Navigator>
          
        </NavigationContainer>
        
      </View>
    </View>
    
  );
}

