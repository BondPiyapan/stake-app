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
  FlatList,
  Linking
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
import { Camera } from "expo-camera";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment, { locale } from 'moment';
export default class DetailCompany extends React.Component {


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
      dataRepair: null
     
    }

    datacom = this.props.navigation.getParam('datacom')
  }

  async getPermissionCamera() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Camera Permission",
        "Please give a camera permission in order to take a photo."
      );
      return;
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
    console.log('data', datacom)
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
                  source={require('../../../assets/images/tool-kit2.png')}
                />
              </View>
            <View style={{ marginVertical: 20, alignItems:'center' }}>
            <Text
              style={{
                color: '#000',
                fontSize: hp('3%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>รายละเอียดบริษัท</Text>
              {datacom == 1 ? 
              <View style={{alignItems:'center'}}>
                <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set',
              }}>กมลศิริ 48 เสาเข็มเจาะ</Text>
                <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set',
              }}>35 40 50 60</Text>
               <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set',
              }}>ทำงานโดยทีมช่างและ</Text>
                  <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set',
              }}>โฟร์แมนชำนาญการ</Text>
              </View>
              :
              <View style={{alignItems:'center'}}>
                <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set',
              }}>บริษัท ที.เอ.เทค จำกัด</Text>
                <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set',
                textAlign:"center"
              }}>455/24 หมู่บ้าน Biz พัฒนาการ-อ่อนนุช ถนนพัฒนาการ แขวงประเวศ เขตประเวศ กรุงเทพมหานคร 10250</Text>
               <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set',
              }}>Email: tatech2006@gmail.com</Text>
              </View>
              }
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
            {datacom == 1 ?
              <TouchableOpacity onPress={()=>  Linking.openURL(`tel:$0829713548`)}
                style={[styles.button, styles.buttonMobile]}>
                <Text style={styles.buttonText}>โทรติดต่อ 082 971 3548</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity  onPress={()=>  Linking.openURL(`tel:$020500835`)}
                style={[styles.button, styles.buttonMobile]}>
                <Text style={styles.buttonText}>โทรติดต่อ 02 050 0835</Text>
              </TouchableOpacity>
            }
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