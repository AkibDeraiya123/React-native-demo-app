import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            sex: '',
            data: [
                {
                    label: 'Male',
                    value: 'male',
                    color: 'white',
                },
                {
                    label: 'Female',
                    value: 'female',
                    color: 'white',                    
                }
            ]
        };
    }

    render() {
        return (
            <View style={styles.regForm}>
                <Text style={styles.regHeader}>Registration</Text>

                <TextInput
                    placeholder="Your fullname"
                    underlineColorAndroid={'transparent'}
                    onChangeText={ (name) => this.setState({ name }) }
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Your email"
                    underlineColorAndroid={'transparent'}
                    onChangeText={ (email) => this.setState({ email }) }
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Your password"
                    underlineColorAndroid={'transparent'}
                    onChangeText={ (password) => this.setState({ password }) }
                    secureTextEntry={true}
                    style={styles.textInput}
                />
                <Text style={styles.btnFont}> Sex:  </Text>
                <RadioGroup 
                    radioButtons={this.state.data} 
                    onPress={(data) => this.setState({ sex: data })}
                    flexDirection='row'
                    style={styles.radioBtn}
                />

                <TouchableOpacity
                    style={styles.button}
                    // onPress={this.onPress}
                >
                    <Text style={styles.btnFont}> Sign up </Text>
                </TouchableOpacity>

                <Text 
                    style={styles.already}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    Already Registerd?
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    regForm: {
        flex: 1,
        justifyContent: 'center',
        padding: 60,
        backgroundColor: '#36485f',
    },
    regHeader: {
        color: '#fff',
        fontSize: 24,
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#199187'
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#fff'
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd'
    },
    btnFont: { 
        color: '#fff',
        fontWeight: 'bold'
    },
    already: {
        alignSelf: 'stretch',
        textAlign: 'center',
        marginTop: 40,
        color: '#fff'
    },
    radioBtn: {
        margin: 30
    }
});
