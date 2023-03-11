import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  SafeAreaView,
  Modal,
  ImageBackground,
  FlatList
} from 'react-native';
import Slider from "react-native-smooth-slider";
import MapView, { Callout, Marker, Polygon } from 'react-native-maps';
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import * as Icon from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Asset } from 'expo-asset';
export default class MainEngineerScreen extends React.Component {


  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false,
      typeLogin: 'username',
      value: 0.2,
      showeditHeader: false,
      showmainHeader: true,
      showSelectRoom: false,
      dateRepair: [
        { id: 1, nameUser: 'เสาเข็ม 6 เหลี่ยม', roomNo: '800 บาท', price: 800, detail1: '1.5 ตัน', detail2: '6', img: require('../../../assets/images/stake/1.jpeg'), reason: 'ผนักลอก' },
        { id: 2, nameUser: 'เสาเข็ม I 15', roomNo: '900 บาท', price: 900, detail1: '2 - 5 ตัน', detail2: '6', img: require('../../../assets/images/stake/2.jpeg'), reason: 'ขอบกำแพงหลุด' },
        { id: 3, nameUser: 'เสาเข็ม I 18', roomNo: '1,000 บาท', price: 1000, detail1: '8 - 15 ตัน', detail2: '6', img: require('../../../assets/images/stake/3.jpeg'), reason: 'เพดานรั่ว' },
        { id: 4, nameUser: 'เสาเข็มเจาะ ไดมิเตอร์ 35', roomNo: '13,000 บาท', price: 13000, detail1: '20 - 35 ตัน', detail2: '18-21', img: require('../../../assets/images/stake/4.jpeg'), reason: 'ผนักลอก, สีลอก' },
        { id: 5, nameUser: 'เสาเข็มเจาะ ไดมิเตอร์ 50', roomNo: '20,000 บาท', price: 20000, detail1: '40 - 50 ตัน', detail2: '18-21', img: require('../../../assets/images/stake/5.jpeg'), reason: 'ล้างแอร์' },
        { id: 6, nameUser: 'เสาเข็มตอก I 22', roomNo: '12,000 บาท', price: 12000, detail1: '20 - 25 ตัน', detail2: '18-21', img: require('../../../assets/images/stake/6.jpeg'), reason: 'คอมแอร์ขึ้นสนิม' },
        { id: 7, nameUser: 'เสาเข็มตอก I 26', roomNo: '13,000 บาท', price: 13000, detail1: '30 - 35 ตัน', detail2: '18-21', img: require('../../../assets/images/stake/7.jpeg'), reason: 'ล้างแอร์' },
        { id: 8, nameUser: 'เสาเข็ม Micro Pile เหล็กกลม', roomNo: '18,000 บาท', price: 18000, detail1: '20 - 25 ตัน', detail2: '18-21', img: require('../../../assets/images/stake/8.jpeg'), reason: 'กำแพงด้านนอกแตก' },
        { id: 9, nameUser: 'เสาเข็ม Micro Pile ปูนสี่เหลี่ยม', roomNo: '12,000 บาท', price: 12000, detail1: '20 - 25 ตัน', detail2: '18-21', img: require('../../../assets/images/stake/9.jpeg'), reason: 'กำแพงด้านนอกแตก' },
      ],
      dataRepair: null

    }


  }

  // UNSAFE_componentWillMount() {
  //   firebase
  //     .database()
  //     .ref('dataRepair')
  //     .on('value', snapshot => {
  //       let array = [];
  //       snapshot.forEach(function (childSnapshot) {
  //         // const key = childSnapshot.key;
  //         const childData = childSnapshot.val();
  //         console.log(childData);
  //         array.push(childData);
  //       });
  //       this.setState({ dataRepair: array, loader: false });
  //     });
  // }

  renderItem(item) {
    console.log('item', item)
    return (
      <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEngineer', { data: item })}
          style={{
            flexDirection: 'row', width: width * .9, borderRadius: 10, backgroundColor: '#fff',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1.84,
            elevation: 3,
            alignItems: 'center'
          }}>
          <View style={{ flex: 0.2, padding: 10 }}>
            <Image
              style={{width: 70, height: 60}}
              source={item.img}
            />
          </View>
          <View style={{ justifyContent: 'flex-start', padding: 5, marginLeft: 40 }}>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>{item.nameUser}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ราคา : {item.roomNo}</Text>
            {/* <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ชั้น : {item.floor}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ประเภท : {item.type}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>วันที่เข้าซ่อม : {item.dateRepair}</Text> */}
            {/* {item.verify == true ?
              <Text
                numberOfLines={1}
                style={{
                  width: width * .3,
                  color: '#66CC66',
                  fontSize: hp('1.8%'),
                  fontFamily: 'sukhumvit-set',
                }}>{check}</Text> :
              <Text
                numberOfLines={1}
                style={{
                  width: width * .3,
                  color: '#FF3333',
                  fontSize: hp('1.8%'),
                  fontFamily: 'sukhumvit-set',
                }}>{check}</Text>
            } */}

          </View>

        </TouchableOpacity>
      </View>
    )
  }



  render() {

    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.dateRepair}
          renderItem={({ item }) => this.renderItem(item)}
        //  keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }


}

var customStyles7 = StyleSheet.create({
  track: {
    height: 1,
    backgroundColor: 'rgba(150, 150, 150, 0.6)',
  },
  thumb: {
    width: 10,
    height: 10,
    backgroundColor: 'rgba(150, 150, 150, 0.3)',
    borderColor: '#fff',
    borderWidth: 14,
    borderRadius: 15,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1
  },
  wrapper: {
    flex: 0.33,
    alignItems: 'center',
  },
  button: {
    height: hp('6%'),
    width: width * .8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonMobile: {
    backgroundColor: '#4CAF50',
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonTextBlack: {
    fontSize: hp('2.6%'),
    color: '#000',
    fontFamily: 'sukhumvit-set-bold',
  },
  buttonTextBlack2: {
    fontSize: hp('2.8%'),
    color: '#000',
    fontFamily: 'sukhumvit-set',
  },
  buttonText: {
    fontSize: hp('2.5%'),
    color: '#fff',
    fontFamily: 'sukhumvit-set',
  },
  buttonText1: {
    fontSize: hp('1.8%'),
    color: '#999',
    fontFamily: 'sukhumvit-set',
  },
});
{/* <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', marginTop: hp('6%'), padding: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
              <Text style={styles.buttonTextBlack2}>ID's home</Text>
              <Icon.Entypo
                name='chevron-small-right'
                size={26}
                style={{ alignItems: 'center', justifyContent: 'center' }}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flex: 0.2 }}>
              <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
                <Icon.AntDesign
                  name='bells'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AddDevice')}
              style={{ alignItems: 'center' }}>
                <Icon.AntDesign
                  name='plus'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: hp('6%'), padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
              <Text style={styles.buttonTextBlack2}>Favorites</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 0.2, justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
                <Icon.Feather
                  name='menu'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={{
              width: width * .9, height: hp('28%'), backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', justifyContent: 'center',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <Images
                width={width * .6}
                source={require('../../assets/images/adddeivce.jpg')}
              />
              <Text style={{
                  fontSize: hp('2%'),
                  color: '#ccc',
                  fontFamily: 'sukhumvit-set',
                }}>No device yet</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AddDevice')}
                style={{ alignItems: 'center', borderRadius: 40, borderWidth: 1, padding: 7, width: width * .4}}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: '#000',
                  fontFamily: 'sukhumvit-set',
                }}>Add Device</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView> */}