import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../component/card';
import ButtonMenu from '../component/buttonMenu';
import FeedImage from '../component/Feed';
import Banner from '../component/bannerImage';

const dimensionHeight = Dimensions.get('window').height;
const dimensionWidth = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      {/* Header */}
      <View style={styles.wrapperHeader}>
        <Icon
          name="menu-outline"
          size={30}
          onPress={() => navigation.openDrawer()}
        />

        <Text style={styles.wrapperText}>Homescreen</Text>
      </View>

      {/* Card */}

      <View style={styles.cardWrapper}>
        <View style={styles.cardIcon}>
          <Card name={'phone-portrait-outline'} title={'Phone'} />
          <Card name={'card-outline'} title={'Card'} />
          <Card name={'basket-outline'} title={'Bucket'} />
          <Card name={'list-outline'} title={'List'} />
        </View>
        <View style={styles.cardIcon}>
          <Card name={'alert-circle-outline'} title={'Warn'} />
          <Card name={'bulb-outline'} title={'Electric'} />
          <Card name={'link-outline'} title={'Link'} />
          <Card name={'apps-outline'} title={'Menu'} />
        </View>
      </View>

      {/* Button Feature */}

      <View style={styles.listWrapper}>
        <Text style={styles.listText}>Top Pick For You</Text>
        <View style={{flexDirection: 'row'}}>
          <ButtonMenu title="All" />
          <ButtonMenu title="Voucher" />
          <ButtonMenu title="Lifestyle" />
          <ButtonMenu title="Games" />
        </View>
      </View>

      {/* Feeds */}

      <View style={styles.feedWrapper}>
        <View style={styles.feedContent}>
          <View>
            <Text style={styles.feedText}>Feed</Text>
            <Text>Lorem ipsum dolor sit amet ipsum</Text>
          </View>
          <View>
            {dimensionWidth > 400 ? (
              <Button title="See All" />
            ) : (
              <TouchableOpacity>
                <Text>See All</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <FeedImage
            title={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
          />
          <FeedImage
            title={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt est sed '
            }
          />
        </View>
      </View>

      {/* Banner */}
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row'}}>
          <Banner />
          <Banner />
          <Banner />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapperHeader: {
    backgroundColor: 'skyblue',
    height: dimensionHeight / 5,
    padding: 10,
    opacity: 0.5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: 'row',
    flex: 1,
  },

  wrapperText: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
  },

  cardWrapper: {
    backgroundColor: '#00B4DB',
    marginHorizontal: 10,
    marginTop: Dimensions.get('window').height / -10,
    borderRadius: 10,
    opacity: 0.8,
    elevation: 5,
    paddingHorizontal: 12,
  },

  cardIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flex: 1,
  },

  listWrapper: {
    margin: 15,
  },

  listText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  feedWrapper: {
    margin: 10,
    padding: 9,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  feedContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  feedText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
