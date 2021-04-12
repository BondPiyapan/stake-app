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
  KeyboardAvoidingView
} from 'react-native';

const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
let appjson = require('../../app.json');

export default class MainLogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false,
      typeLogin: 'username',
      username: '',
      password: ''
    }
  }

  async storeUser(userId) {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem('user', JSON.stringify(userId));
        return jsonOfItem;
    } catch (error) {
        console.log(error.message);
    }
}

  render() {

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? "position" : null}
          behavior={'position'}
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 20 })}
        >
          <View style={{ alignItems: 'center', marginTop: 100, marginBottom: 20 }}>
            <Images
              width={width * .6}
              source={require('../../assets/images/construction1.png')}
            />
            <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
                marginTop: hp('2.4%'),
                textAlign: 'center'
              }}>แอปพิเคชั่นแสดงราคาเสาเข็ม</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>สำหรับที่พักอาศัยและส่วนต่อเติม</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            {this.state.typeLogin == 'username' ?
              <View>
                <View style={{ width: width * .8, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 20 }}>
                  <TextInput
                    onChangeText={TextInputValue => this.setState({
                      username: TextInputValue
                    })}
                    placeholder={'บัญชีผู้ใช้'}
                    style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    returnKeyType={"done"}
                    clearButtonMode="always" />
                </View>
                <View style={{ width: width * .8, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 20, marginTop: 20 }}>
                  <TextInput
                    secureTextEntry={true}
                    onChangeText={TextInputValue => this.setState({
                      password: TextInputValue
                    })}
                    placeholder={'รหัสผ่าน'}
                    style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    returnKeyType={"done"}
                    clearButtonMode="always" />

                </View>
              </View>
              :
              <View>
                <PhoneInput
                  defaultValue={''}
                  defaultCode="TH"
                  withDarkTheme
                  onChangeFormattedText={(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                  }}
                />
              </View>
            }

          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity onPress={() => {
              if (this.state.username == '' || this.state.password == '') {
                alert('กรุณากรอก Username และ Password')
              } else {
                this.props.navigation.navigate('MainEngineer')
              }
            }}
              style={[styles.button, styles.buttonMobile]}>
              <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>

            {/* {this.state.typeLogin == 'username' ?
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('RegisterScreen')}
              style={{ alignSelf: 'flex-start', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>สมัครสมาชิก</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({
              typeLogin: 'mobile'
            })}
              style={{ alignSelf: 'flex-end', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>เข้าสู่ระบบผ่านเบอร์โทรศัพท์</Text>
            </TouchableOpacity>
            </View>
            :
            <TouchableOpacity onPress={() => this.setState({
              typeLogin: 'username'
            })}
              style={{ alignSelf: 'flex-end', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>เข้าสู่ระบบผ่าน Username / Password</Text>
            </TouchableOpacity>
          } */}
          </View>
          {/* <View style={{ justifyContent: 'center', flex: 0.33, alignItems: 'center' }}>
        <Text style={styles.buttonText1}>เข้าสู่ระบบผ่าน Username / Password</Text>
        </View> */}
        </KeyboardAvoidingView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: hp('2%'),
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
