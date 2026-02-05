import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" />,
        }}
      />
      <Tabs.Screen
        name="reanimated"
        options={{
          title: "Reanimated",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="animation" />
          ),
        }}
      />
    </Tabs>
  );
}
