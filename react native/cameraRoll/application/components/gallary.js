import React, { Component } from 'react';
import { Text, View, ScrollView, CameraRoll, Button, Image } from 'react-native';

export default class GallaryPage extends Component {
    constructor() {
        super()
        this.state = {
            photos: []
        }
    }
    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };
    render() {
        return (
            <View>
                <Button title="Load Images" onPress={this._handleButtonPress} />
                <ScrollView>
                    {this.state.photos.map((p, i) => {
                        return (
                            <View>
                                <Image
                                    style={{
                                        width: 300,
                                        height: 100,
                                    }}
                                    source={{ uri: p.node.image.uri }}
                                />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text>Home Screen</Text>
            // </View>
        );
    }
}
