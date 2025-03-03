import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { FontAwesome } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
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

        {/* SHOW TABS */}
        <Drawer.Screen 
          name="tabs"
          options={{ 
            title: 'Tabs + Stack', 
            drawerLabel: 'Tabs + Stack',
            drawerIcon: () => (<FontAwesome size={28} name="home" color={'green'}/>)
          }}
        />
    </Drawer>
  )
}

export default DrawerLayout