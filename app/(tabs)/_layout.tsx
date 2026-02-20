import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              size={28}
              name="house"
              color={focused ? "blue" : "gray"}
            />
          ),
          tabBarBadge: "10",
        }}
      />
      <Tabs.Screen
        name="reanimated"
        options={{
          title: "Reanimated",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              size={28}
              name="animation"
              color={focused ? "blue" : "gray"}
            />
          ),
          tabBarBadge: "5",
        }}
      />
    </Tabs>
  );
}
