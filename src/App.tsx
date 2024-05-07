import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <Text className="mb-6 font-mono font-bold text-xl text-white">
	      NativeWind, is working!
      </Text>
      <Text className="text-6xl">
        🎉
      </Text>
      <StatusBar style="light" />
    </View>
  );
}