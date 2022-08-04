import React from "react";
import {Platform, StyleSheet, View} from "react-native";
import Theme from "../Theme";
import AppTextBold from "./UI/AppTextBold";


const Navbar = (props) => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid
            })}}>
            <AppTextBold style={styles.text}>
                {props.title}
            </AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
         height: 70,
         alignItems: 'center',
         justifyContent: 'flex-end',
        paddingBottom: 10
    },
    navbarAndroid: {
        backgroundColor: Theme.mainColor,
    },
    navbarIos: {
        borderBottomColor: Theme.mainColor,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? Theme.mainColor : 'white',
        fontSize: 20,
    }
});
export default Navbar