import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase'

import { Container, Button, Text, Content, Form, Item, Input, Label } from 'native-base';


export default class LoginPage extends Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#232323',
        },
        headerTintColor: '#aaa',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    onLogin(e) {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((r) => {
                let db = firebase.database().ref('/').child(`users/${r.uid}`)
                db.once("value", (user) => {
                    console.log("Account Create Suuccessfully", user.val())
                    this.props.navigation.navigate("Gallary")
                })
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
                console.log(errorMessage)
            });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item fixedLabel last>
                            <Label>Email</Label>
                            <Input onChangeText={(e) => { this.setState({ email: e }) }} />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry={true}
                                onChangeText={(e) => { this.setState({ password: e }) }} />
                        </Item>
                    </Form>
                    <Button info full onPress={this.onLogin.bind(this)}>
                        <Text>Login! </Text>
                    </Button>
                    <Button transparent style={styles.loginButtonSection} onPress={() => this.props.navigation.navigate("signup")}>
                        <Text>Create Account</Text>
                    </Button>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    loginButtonSection: {
        width: '100%',
        justifyContent: "center"
    }
})