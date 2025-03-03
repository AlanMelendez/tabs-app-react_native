import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation, Link } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
const ProductScreen = () => {
  const navigation = useNavigation();

  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id == id);

  if (!product) {
    return <Redirect href='/products' />;
  }
  useEffect(() => {
    if (id) {
      navigation.setOptions({
        title: `${product.title}`, // Dynamically set title based on id
      });
    }
  }, [id, navigation]);

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  );
};
export default ProductScreen;