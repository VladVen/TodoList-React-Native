import React, {useState} from "react";
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";
import Theme from "../Theme";


const AddTodos = ({onSubmit}) => {
    const [todoValue, setTodoValue] = useState('')

    const pressHandler = () => {
        if (todoValue.trim().length <= 2) {
            Alert.alert(
                '',
                'The minimum title length is 3 characters.',
                [{
                    text: "Ok",
                    style: "positive",
                },],
                {
                    cancelable: true,
                }
            )
        } else if (todoValue.trim()) {
            onSubmit(todoValue)
            setTodoValue("")
        }
    }
    return (
        <View style={styles.addTodos}>
            <TextInput style={styles.input} value={todoValue}
                       onChangeText={setTodoValue}
                       placeholder={'Enter your task...'}
                       autoCorrect={false}
                       autoCapitalize={'none'}
                       maxLength={300}
            />
            <Button title={'Add'} onPress={pressHandler} disabled={!todoValue.trim()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    addTodos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        width: '70%',
        padding: 5,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: Theme.mainColor
    },

});

export default AddTodos