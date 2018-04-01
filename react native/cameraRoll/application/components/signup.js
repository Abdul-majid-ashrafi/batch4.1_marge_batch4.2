import React, { Component } from 'react';
import { Container, Button, Text, Content, Form, Item, Input, Label } from 'native-base';
import * as firebase from 'firebase'

export default class Registration extends Component {
    constructor() {
        super()
        this.state = {
            username: null,
            email: null,
            password: null
        }
    }
    onSubmit(e) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((r) => {
                let db = firebase.database().ref('/').child(`users/${r.uid}`)
                db.set(this.state).then((result) => {
                    console.log("Account Create Suuccessfully")
                    this.props.navigation.navigate("login")
                })
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(error)
                return error.code
            });
        // console.log(this.state)
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(e) => { this.setState({ username: e }) }} />
                        </Item>
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
                    <Button info full onPress={this.onSubmit.bind(this)}>
                        <Text>Signup! </Text>
                    </Button>
                </Content>
            </Container>

        );
    }
}
