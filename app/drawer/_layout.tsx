import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { FontAwesome } from '@expo/vector-icons';

const DrawerLayout = () => {
  return (
    <Drawer

     screenOptions={{
      overlayColor: 'rgba(0, 0, 0, 0.7)',
      drawerActiveTintColor: 'red',
      headerShadowVisible: false,
      sceneContainerStyle: {
        backgroundColor: 'white',
      }
     }}
    >
        <Drawer.Screen
          name="user/index"
          options={{ 
            title: 'Usuario', 
            drawerLabel: 'User',
            // drawerIcon: () => <Text>👤</Text>
            drawerIcon: ({color,size}) => (<FontAwesome size={28} name="user" color={color}/>)
           }}
        />
        <Drawer.Screen 
          name="schedule/index"
          options={{ 
            title: 'Schedule', 
            drawerLabel: 'Schedulesxd',
            drawerIcon: () => (<FontAwesome size={28} name="calendar" color={'indigo'}/>)
          }}
        />
    </Drawer>
  )
}

export default DrawerLayout