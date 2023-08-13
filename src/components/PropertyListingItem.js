import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import BookAnimations from 'react-native-custom-book-animation';

const PropertyListingItem = ({id, title, description, uri, navigation}) => {
  return (
    <TouchableOpacity
    // onPress={()=>navigation.navigate('InstaViewStack')}
    >
      <View style={styles.listingWrapper}>
        <Image
          style={styles.listImage}
          source={{
            uri,
          }}
        />
        <BookAnimations
          img={uri}
          title={title}
          subTitle={description}
          topPosition={150}
          leftPosition={30}
          height={200}
          size={{height: 300}}>
          <View>
            <Text style={styles.headline}>569</Text>
            <Text style={styles.subheadline}>Reviews</Text>
            <View style={styles.underline} />
            <Text style={styles.headline}>4.98</Text>
            <Text style={styles.subheadline}>Rating</Text>
            <View style={styles.underline} />
            <Text style={styles.headline}>7</Text>
            <Text style={styles.subheadline}>Years Hosting</Text>
          </View>
        </BookAnimations>
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyListingItem;

const styles = StyleSheet.create({
  listingWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 12,
    paddingBottom: 16,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal: 12,
  },
  listDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#666',
    marginHorizontal: 12,
  },
  listImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgreyf',
  },
  headline: {
    fontSize: 17,
    fontweight: 700,
    width:'80%'
  },
  subheadline: {
    fonSize: 14,
    fontweight: 400,
    color: '#888',
    width:'80%'
  },
});
