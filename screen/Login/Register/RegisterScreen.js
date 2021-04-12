import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    Dimensions,
    AsyncStorage,
    Alert,
    ImageBackground,
    KeyboardAvoidingView,
    BackHandler
} from 'react-native';
const { height, width } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class RegisterScreen extends React.Component {
    static navigationOptions = {

    };

    constructor(props) {
        super(props);
        this.state = {
            headName: '',
            date: "",
            formatDate: null,
            ErrorLastname: null,
            ErrorFullname: null,
            ErrorDate: null,
            ErrorEmail: null,
            TextInputLastname: '',
            TextInputFullname: '',
            TextInputEmail: '',
        }

    }






    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <KeyboardAvoidingView behavior="padding" style={{
                        flex: 1,
                        justifyContent: 'space-between',
                    }}>
                        <View style={{ padding: 40 }}>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.headText}>Email</Text>
                                <TextInput
                                    placeholder={'Enter your Email'}
                                    style={{ padding: -10, fontFamily: 'sukhumvit-set', }}
                                    underlineColorAndroid={'transparent'}
                                    numberOfLines={1}
                                />
                                {this.state.ErrorFullname == false ? (
                                    <Text style={styles.errorMessage}>
                                        z
                                    </Text>
                                ) : null}
                                <View style={{ height: 1, backgroundColor: '#CED7DE', marginTop: 10, marginBottom: 10 }} />
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.headText}>Password</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder={'Enter your Password'}
                                    style={{ padding: -10, fontFamily: 'sukhumvit-set', }}
                                    underlineColorAndroid={'transparent'}
                                    numberOfLines={1}
                                />
                                {this.state.ErrorLastname == false ? (
                                    <Text style={styles.errorMessage}>
                                        z
                                    </Text>
                                ) : null}
                                <View style={{ height: 1, backgroundColor: '#CED7DE', marginTop: 10, marginBottom: 10 }} />
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.headText}>Confirm Password</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder={'Enter your Confirm Password'}
                                    style={{ padding: -10, fontFamily: 'sukhumvit-set', }}
                                    underlineColorAndroid={'transparent'}
                                    numberOfLines={1}
                                />
                                {this.state.ErrorEmail == false ? (
                                    <Text style={styles.errorMessage}>
                                        z
                                    </Text>
                                ) : null}
                                <View style={{ height: 1, backgroundColor: '#CED7DE', marginTop: 10, marginBottom: 10 }} />
                            </View>


                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonMobile]}>
                                    <Text style={styles.buttonText}>สมัครสมาชิก</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'sukhumvit-set',
    },
    headText2: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'sukhumvit-set',
    },
    button: {
        height: hp('6%'),
        width: width * .6,
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
    buttonFacebook: {
        backgroundColor: '#3b5998',
    },
    buttonMobile: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'sukhumvit-set',
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontFamily: 'sukhumvit-set',
    },
});