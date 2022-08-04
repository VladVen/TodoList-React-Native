import React from "react";
import {StyleSheet, Text} from "react-native";

const AppText = (props) => {
  return(
      <Text style={{...style.default, ...props.style}}>
          {props.children}
      </Text>
  )
}

const style = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
})

export default AppText