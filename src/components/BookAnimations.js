import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';

const BookAnimations = ({
  img,
  topPosition = 150,
  leftPosition = 30,
  height,
  title,
  subTitle,
  children,
  titleStyle,
  subTitleStyle,
  imgStyle
}) => {
  const spin = useSharedValue(0);
  const onAnimate = () => {
    spin.value = withTiming(spin.value === 0 ? 1 : 0, {duration: 800});
  };

  const frontStyle = useAnimatedStyle(() => {
    const spinDeg = interpolate(spin.value, [0, 1], [0, -180], 'clamp');
    return {
      transform: [
        {
          rotateY: `${spinDeg}deg`,
        },
      ],
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const spinDeg = interpolate(spin.value, [0, 1], [180, 0], 'clamp');
    return {
      transform: [
        {
          rotateY: `${spinDeg}deg`,
        },
      ],
      borderTopLeftRadius: interpolate(spin.value, [0, 1], [0, 16]),
      borderBottomLeftRadius: interpolate(spin.value, [0, 1], [0, 16]),
    };
  });
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(spin.value, [0, 1], [0.3, 1]),
        },
        {
          translateX: interpolate(spin.value, [0, 1], [0, 170], 'clamp'),
        },
        {
          translateY: interpolate(spin.value, [0, 1], [0, -130], 'clamp'),
        },
      ],
    };
  });
  const leftStyle = useAnimatedStyle(() => {
    const spinDeg = interpolate(spin.value, [0, 1], [-55, 0], 'clamp');
    return {
      transform: [
        {
          perspective: 1000,
        },
        {
          rotateY: `${spinDeg} deg`,
        },
        {
          translateX: interpolate(spin.value, [0, 1], [0, -190]),
        },
      ],
    };
  });

  return (
    <TouchableOpacity
      style={[styles.container, {top: topPosition, left: leftPosition}]}
      onPress={onAnimate}>
      <Animated.View style={containerStyle}>
        <Animated.View style={[styles.left, leftStyle]}>
          <Animated.View style={[styles.front, frontStyle, {height}]}>
            <Image style={imgStyle??styles.avatar} source={{uri: img}}></Image>
          </Animated.View>
          <Animated.View style={[styles.back, backStyle, {height}]}>
            <Image style={imgStyle??styles.avatar} source={{uri: img}}></Image>
            <Text numberOfLines={1} style={titleStyle ?? styles.headline}>
              {title}
            </Text>
            <Text numberOfLines={1} style={subTitleStyle ?? styles.subheadline}>
              {subTitle}
            </Text>
          </Animated.View>
        </Animated.View>
        <View style={[styles.right, {height}]}>{children}</View>
      </Animated.View>
    </TouchableOpacity>
  );
};
export default BookAnimations;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 64,
  },
  front: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: 'grey',
    shadowoffset: {width: 0, height: 0},
    shadowopacity: 6,
    shadowRadlus: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  back: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    gар: 8,
    backfaceVisibility: 'hidden',
  },
  right: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 150,
    height: 200,
    zIndex: -100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
    gap: 4,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgreyf',
  },
  headline: {
    fontSize: 17,
    fontweight: 700,
    width: '80%',
  },
  subheadline: {
    fonSize: 14,
    fontweight: 400,
    color: '#888',
    width: '80%',
  },
});
