import { Button, ScrollView, Text, View } from "react-native";
import Animated, {
  createAnimatedComponent,
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

export default function Index() {
  const firstwidth = useSharedValue(100);
  const translateX = useSharedValue(0);
  const AnimatedCircle = createAnimatedComponent(Circle);

  const handlePress = () => {
    firstwidth.value = withSpring(Math.random() * 100 + 50);
  };

  const secondHandlePress = () => {
    translateX.value = withSpring(translateX.value + 50);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value + 50 }],
    };
  });

  const radius = useSharedValue(30);

  const thirdHandlePress = () => {
    radius.value += 10;
  };

  const animatedProps = useAnimatedProps(() => {
    return {
      r: withTiming(radius.value),
    };
  });

  withTiming(radius.value, {
    duration: 5000,
    easing: Easing.inOut(Easing.quad),
  });

  return (
    <ScrollView className="flex-1 p-safe">
      <View className="m-4">
        <Text className="text-start text-lg font-semibold ">
          {" "}
          1. First animation with shated value and withSpring Animation
        </Text>
        <View className="mt-4">
          <Animated.Text
            className=" text-xl font-bold text-red-500 bg-green-400 mx-8"
            style={{ width: firstwidth }}
          >
            Pushpaje!
          </Animated.Text>

          <View className="mt-4">
            <Button title="Click me" onPress={handlePress} />
          </View>
        </View>
      </View>
      <View className="m-4">
        <Text className="text-start text-lg font-semibold ">
          {" "}
          2. Aniamting styles and props
        </Text>

        <View className="mt-4">
          <Animated.View
            className="size-12 bg-violet-800 rounded "
            style={animatedStyle}
          />

          <View className="mt-4">
            <Button title="Click me" onPress={secondHandlePress} />
          </View>
        </View>
      </View>
      <View className="m-4 ">
        <Text className="text-start text-lg font-semibold ">
          {" "}
          3. Aniamting Props
        </Text>

        <View className="mt-4 ">
          <Svg height={100} width={100} viewBox="0 0 100 100">
            <AnimatedCircle
              cx="50"
              cy="50"
              fill="green"
              animatedProps={animatedProps}
            />
          </Svg>

          <View className="mt-4 ">
            <Button title="Click me" onPress={thirdHandlePress} />
          </View>
        </View>
      </View>

      <View className="m-4">
        <Text className="text-start text-lg font-semibold ">
          {" "}
          4. Customizing animation (With Timing)
        </Text>

        <View className="mt-4">
          <Svg height={100} width={100} viewBox="0 0 100 100">
            <AnimatedCircle
              cx="50"
              cy="50"
              fill="green"
              animatedProps={animatedProps}
            />
          </Svg>

          <View className="mt-4">
            <Button title="Click me" onPress={thirdHandlePress} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
