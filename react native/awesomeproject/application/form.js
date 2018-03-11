import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    submit() {
        alert("Hello :" + this.state.text)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Button 
                title={this.props.title} 
                onPress={this.submit.bind(this)} />
                <Text style={{ fontSize: 50 }}> {this.state.text}  </Text>
            </View>
        );
    }
}