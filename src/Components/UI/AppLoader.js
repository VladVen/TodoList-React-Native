import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import Theme from "../../Theme";


const AppLoader = () => {
    return (
        <View style={style.wrapp}>
            <ActivityIndicator size={'large'} color={Theme.mainColor}/>
        </View>
    )
}

const style = StyleSheet.create({
    wrapp: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AppLoader