import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

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
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button info full onPress={() => this.props.navigation.navigate("Home")}>
                        <Text>Login! </Text>
                    </Button>
                    <Button transparent style={styles.loginButtonSection} onPress={() => this.props.navigation.navigate("signup")}>
                        <Text>Create Account</Text>
                    </Button>
                </Content>
                {/* 
                <Button title="Login"
                onPress={() => this.props.navigation.navigate("Home")}
            /> */}
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