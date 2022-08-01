import React from "react";
import {StyleSheet, Text, View} from "react-native";


const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
         height: 70,
         alignItems: 'center',
         justifyContent: 'flex-end',
        backgroundColor: 'green',
        paddingBottom: 10
    },
    text: {
        fontSize: 20,
    }
});
export default Navbar