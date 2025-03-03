import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
const StackLayout = () => {

  const navigation = useNavigation();

  const onHeaderLeftPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };


  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        headerLeft: ({tintColor, canGoBack}) => <FontAwesome name="bars" className='mr-5' size={24} color={tintColor} onPress={onHeaderLeftPress} />,
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
