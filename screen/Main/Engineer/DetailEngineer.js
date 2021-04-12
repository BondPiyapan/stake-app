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
  AsyncStorage,
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
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment, { locale } from 'moment';
import InputSpinner from "react-native-input-spinner";
export default class DetailEngineer extends React.Component {


  constructor(props) {
    super(props)
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
      value: 0,
      imageReturn: null,
      showDate: false,
      date: null,
      dataRepair: null,
      num: 1

    }

    data = this.props.navigation.getParam('data')
  }

  async getPermissionCamera() {
    const { status } = await Permissions.getAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.CAMERA);
      console.log('CAMERA for not enabled.');
    } else {
      console.log(status + 'CAMERA enabled');
    }
  }

  _pickImage = async () => {
    this.getPermissionCamera()

    try {
      let result = await ImagePicker.launchCameraAsync({
        quality: 0.5,
        // base64: true,

      });

      // let manipResult = await ImageManipulator.manipulateAsync(result.uri,
      //   [{ resize: { width: 600, height: 800 } }],
      //   { compress: 0.9, format: ImageManipulator.SaveFormat.JPEG, base64: true }
      // );

      if (!result.cancelled) {
        this.setState({ imageReturn: result.uri, });
        // console.log('base64', this.state.imagebase64 );
      } else {
        this.setState({ imageReturn: null, })
      }
      // console.log(result);
    } catch (E) {
      console.log(E);
    }
  }

  UNSAFE_componentWillMount() {
    console.log('data', data)
    this.setState({
      dataRepair: data, loader: false
    })
  }

  render() {
    var radio_props = [
      { label: 'โครงสร้าง', value: 0 },
      { label: 'ทั่วไป', value: 1 }
    ];
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={{ alignItems: 'center', padding: 20 }}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * .9, height: hp('28%'), }}
                source={this.state.dataRepair.img}
              />
            </View>
            <View style={{ marginVertical: 20, alignItems: 'center' }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: hp('3%'),
                  fontFamily: 'sukhumvit-set-bold',
                }}>{this.state.dataRepair.nameUser}</Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: hp('2%'),
                  fontFamily: 'sukhumvit-set-bold',
                }}>รายละเอียดเสาเข็ม</Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: hp('2%'),
                  fontFamily: 'sukhumvit-set',
                }}>ความลึก(ความยาว) {this.state.dataRepair.detail2} เมตร</Text>
                 <Text
                style={{
                  color: '#000',
                  fontSize: hp('2%'),
                  fontFamily: 'sukhumvit-set',
                }}>รับน้ำหนัก {this.state.dataRepair.detail1}</Text>
              <InputSpinner
              style={{marginVertical: 20}}
                max={1000}
                min={1}
                step={1}
                value={this.state.num}
                onChange={(num) => {
                  this.setState({
                    num: num
                  })
                }}
              />

              <Text
                style={{
                  color: '#000',
                  fontSize: hp('3%'),
                  fontFamily: 'sukhumvit-set-bold',
                }}>ราคา {this.state.dataRepair.price * this.state.num} บาท</Text>

              {/* <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ห้อง : {this.state.dataRepair.roomNo}</Text>
              <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ชั้น : {this.state.dataRepair.floor}</Text>
              <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ประเภท : {this.state.dataRepair.type}</Text>
              <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>วันที่เข้าซ่อม : {this.state.dataRepair.dateRepair}</Text>
              <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>รายละเอียดการซ่อม</Text>
              <Text
              style={{
                color: '#000',
                fontSize: hp('2%'),
                fontFamily: 'sukhumvit-set',
              }}>{this.state.dataRepair.reason}</Text> */}
            </View>

            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('DetailCompany', { datacom: 1 }) }}
                style={[styles.button, styles.buttonMobile]}>
                <Text style={styles.buttonText}>กมลศิริ 48 เสาเข็มเจาะ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('DetailCompany', { datacom: 2 }) }}
                style={[styles.button, styles.buttonMobile]}>
                <Text style={styles.buttonText}>บริษัท ที.เอ.เทค จำกัด</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: '#C3C6B1',
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