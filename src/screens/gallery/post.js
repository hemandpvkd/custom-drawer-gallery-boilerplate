import {Dimensions, FlatList, Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sampleImages} from '../../data/images';
import Animated from 'react-native-reanimated';

const {width} = Dimensions.get('screen');

function Posts({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={sampleImages}
        numColumns={3}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('Detail', item)}>
            <Animated.View sharedTransitionTag={item.id.toString()}>
              <Animated.Image
                source={{uri: item.uri}}
                style={styles.post}
                sharedTransitionTag={item.id.toString() + '1'}
              />
            </Animated.View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  post: {
    width: width / 3,
    height: width / 3,
  },
  button: {
    height: 80,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {flexDirection: 'row', flexWrap: 'wrap'},
});
