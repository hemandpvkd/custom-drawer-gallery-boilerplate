import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import DrawerSceneWrapper from '../../components/DrawerSceneWrapper';

const History = ({navigation}) => {
  return (
    <DrawerSceneWrapper>
      <TouchableOpacity onPress={()=>navigation.navigate('InstaViewStack')}>
        <Text>History</Text>
      </TouchableOpacity>
    </DrawerSceneWrapper>
  );
};

export default History;
