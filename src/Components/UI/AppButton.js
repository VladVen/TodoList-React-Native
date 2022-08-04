import React from "react";
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import AppTextBold from "./AppTextBold";
import Theme from "../../Theme";


const AppButton = ({children, onPress, color = Theme.mainColor}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return(
        <Wrapper onPress={onPress} activeOpacity={0.6}>
            <View style={{...style.default, backgroundColor: color}}>
                <AppTextBold style={style.text}>{children}</AppTextBold>
            </View>
        </Wrapper>

    )
}

const style = StyleSheet.create({
    default: {
        paddingHorizontal:20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems: "center",
    },
    text: {
        color: 'white'
    }
})

export default AppButton