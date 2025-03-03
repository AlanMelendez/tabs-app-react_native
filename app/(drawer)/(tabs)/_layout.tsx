import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'indigo' }}>
      <Tabs.Screen
        name="home/index"
        options={{
          
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
        }}
      />
       <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: 'Stack',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-plus" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout