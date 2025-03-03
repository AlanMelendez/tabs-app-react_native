import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer>
        <Drawer.Screen 
          name="user/index"
          options={{ title: 'Usuario', drawerLabel: 'User' }}
        />
        <Drawer.Screen 
          name="schedule/index"
          options={{ title: 'Schedule', drawerLabel: 'Schedulesxd' }}
        />
    </Drawer>
  )
}

export default DrawerLayout