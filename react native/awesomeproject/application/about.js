import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

export class About extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 2, backgroundColor: 'skyblue' }}>
                    <ScrollView>
                        <Text style={{ fontSize: 99 }}>Hello World  Hello World
                        parent will not have dimensions, so the children can't expand.
                         </Text>
                    </ScrollView>
                </View>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
            </View>
        );
    }
}