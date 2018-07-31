import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <View style={styles.regForm}>
                <Text style={styles.regHeader}>Login</Text>

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

                <TouchableOpacity
                    style={styles.button}
                    // onPress={this.onPress}
                >
                    <Text style={styles.btnFont}> Login </Text>
                </TouchableOpacity>

                <Text style={styles.already}> Not Register? </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    regForm: {
        alignSelf: 'stretch'
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
    }
});
