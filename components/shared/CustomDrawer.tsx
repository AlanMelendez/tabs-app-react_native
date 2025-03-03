import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
   
    <DrawerContentScrollView scrollEnabled={false}>
        <View className='flex justify-center items-center mx-3 p-10 mb-10 rounded-xl bg-primary'>
            <View className='flex justify-center items-center bg-white rounded-full h-24 w-24 mt-5'>
                <Text className='text-primary text-xl font-bold'>👤 ACM</Text>
            </View>
        </View>
        {/* Get the oter items */}
        <DrawerItemList {...props} />


    </DrawerContentScrollView>
  )
}

export default CustomDrawer