import {View, StyleSheet} from "react-native";

const AppCard = (props) => {
  return(
      <View style={{...style.default, ...props.style}}>
          {props.children}
      </View>
  )
}

const style = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor:'#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10
    }
})

export default AppCard