import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default BaseView = ({ children, header, scrollEnabled, footer, props }) => {
    return (
        <SafeAreaView style={{ backgroundColor: props == true ? '#E5E5E5' : 'white', flex: 1 }}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor='transparent'
                translucent={true} />
            {header}
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                scrollEnabled={scrollEnabled == undefined ? true
                    : scrollEnabled}>
                {children}
            </KeyboardAwareScrollView>
            <SafeAreaView>
                {footer}
            </SafeAreaView>
        </SafeAreaView >
    );
}