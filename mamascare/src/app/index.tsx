import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Top Logo */}
      <View className="items-center mt-12">
        <Image 
          source={require('../../assets/images/logo.png')} 
          className="w-40 h-40"
          resizeMode="contain"
        />
      </View>

      {/* Main Image */}
      <View className="items-center mt-6">
        <Image 
          source={require('../../assets/images/1.png')} 
          className="w-80 h-80 rounded-3xl"
          resizeMode="contain"
        />
      </View>

      {/* Text Content */}
      <View className="px-6 mt-8">
        <Text className="text-3xl font-bold text-center text-gray-900">
          Care. Support. Grow Together.
        </Text>
        
        <Text className="text-gray-600 text-center mt-3 text-lg">
          Your trusted companion for a healthy{'\n'}pregnancy journey.
        </Text>
      </View>

      {/* Button */}
      <View className="px-6 mt-auto mb-12">
        <TouchableOpacity 
          onPress={() => router.push('/explore')}
          className="bg-[#10b981] py-4 rounded-2xl items-center"
        >
          <Text className="text-white text-lg font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}