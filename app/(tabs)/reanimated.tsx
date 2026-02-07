import { useEffect } from "react";
import { Button, Dimensions, ScrollView, Text, View } from "react-native";
import Animated, {
  createAnimatedComponent,
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

export default function Reanimated() {
  const duration = 2000;
  const firstwidth = useSharedValue(100);
  const translateX = useSharedValue(0);
  const AnimatedCircle = createAnimatedComponent(Circle);

  const { width } = Dimensions.get("window");
  const timedefaultAnimation = useSharedValue(width / 2 - 100);
  const timelinear = useSharedValue(width / 2 - 100);
  const springDefaultAnimation = useSharedValue(width / 2 - 100);
  const springLinearAnimation = useSharedValue(width / 2 - 100);

  useEffect(() => {
    timelinear.value = withRepeat(
      withTiming(-timelinear.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
    timedefaultAnimation.value = withRepeat(
      withTiming(-timedefaultAnimation.value, {
        duration,
      }),
      -1,
      true,
    );

    springDefaultAnimation.value = withRepeat(
      withSpring(-springDefaultAnimation.value),
      -1,
      true,
    );

    springLinearAnimation.value = withRepeat(
      withSpring(-springLinearAnimation.value, {
        mass: 10,
        damping: 80,
      }),
      -1,
      true,
    );
  }, [
    timedefaultAnimation,
    timelinear,
    springDefaultAnimation,
    springLinearAnimation,
  ]);

  const animatedFirstWidth = useAnimatedStyle(() => ({
    width: firstwidth.value,
  }));

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: timedefaultAnimation.value }],
  }));

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

  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: timelinear.value }],
  }));

  const radius = useSharedValue(30);

  const thirdHandlePress = () => {
    radius.value += 10;
  };

  const animatedProps = useAnimatedProps(() => {
    return {
      r: withTiming(radius.value),
    };
  });

  const springanimatedLinear = useAnimatedStyle(() => ({
    transform: [{ translateX: springLinearAnimation.value }],
  }));
  const springanimatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: springDefaultAnimation.value }],
  }));

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-4">
          <Text className="text-start text-lg font-semibold ">
            {" "}
            1. First animation with shated value and withSpring Animation
          </Text>
          <View className="mt-4">
            <Animated.Text
              className=" text-xl font-bold text-red-500 bg-green-400 mx-8"
              style={animatedFirstWidth}
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
            <View className="w-full items-center justify-center">
              <Animated.View
                className="h-20 w-20 m-5 border border-green-600 rounded-xl items-center justify-center"
                style={animatedDefault}
              >
                <Text className="text-green-600 uppercase font-bold">
                  inout
                </Text>
              </Animated.View>
              <Animated.View
                className="h-20 w-20 m-5 border border-green-600 rounded-xl items-center justify-center"
                style={animatedChanged}
              >
                <Text className="text-green-600 uppercase font-bold">
                  linear
                </Text>
              </Animated.View>
            </View>
          </View>
        </View>
        <View className="m-4">
          <Text className="text-start text-lg font-semibold ">
            {" "}
            5. Customizing animation (With Spring)
          </Text>

          <View className="mt-4">
            <View className="w-full items-center justify-center">
              <Animated.View
                className="h-20 w-20 m-5 border border-green-600 rounded-xl items-center justify-center"
                style={springanimatedDefault}
              >
                <Text className="text-green-600 uppercase font-bold">
                  inout
                </Text>
              </Animated.View>
              <Animated.View
                className="h-20 w-20 m-5 border border-green-600 rounded-xl items-center justify-center"
                style={springanimatedLinear}
              >
                <Text className="text-green-600 uppercase font-bold">
                  linear
                </Text>
              </Animated.View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
