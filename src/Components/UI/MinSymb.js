import {Alert} from "react-native";


const MinSymb = (props) => {
      Alert.alert(
          '',
          'The minimum title length is 2 characters.',
          [{
              text: "Ok",
              style: "positive",
          },],
          {
              cancelable: true,
          }
  )
}

export default MinSymb