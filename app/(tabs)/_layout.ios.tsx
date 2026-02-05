import {
  Badge,
  Icon,
  Label,
  NativeTabs,
} from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={{ default: "house", selected: "house.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="reanimated">
        <Label>Reanimated</Label>
        <Icon sf={"swift"} />
        <Badge>3</Badge>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
