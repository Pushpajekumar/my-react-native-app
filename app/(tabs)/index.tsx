import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#022c22");
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-emerald-950">
      <StatusBar style="light" animated networkActivityIndicatorVisible />
      <Text className="text-white">Index</Text>
    </SafeAreaView>
  );
}
