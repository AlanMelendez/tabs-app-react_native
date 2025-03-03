import { Stack } from 'expo-router';
import React from 'react';
const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Productos',
        }}
      />
      <Stack.Screen
      name="products/[id]"
      options={{
        title: 'Product Details', // Default title
      }}
    />


      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Ajustes Pantalla',
        }}
      />
    </Stack>
  );
};
export default StackLayout;
