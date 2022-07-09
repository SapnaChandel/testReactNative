import React, { Component } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { COLORS } from '../constants';

export class Loader extends Component {

    render() {
        return (
            <Modal
                visible={this.props.visible}
                animationIn='fadeIn'
                animationOut='fadeOut'
                transparent
                useNativeDriver={true}>
                <View style={{
                    flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#200E3222'
                }}>
                    <ActivityIndicator
                        size='large'
                        color={COLORS.primary}
                    />
                </View>
            </Modal>
        )
    }
}

export default Loader