import React, {useState} from "react";
import {Button, Keyboard, StyleSheet, TextInput, View} from "react-native";
import Theme from "../Theme";
import MinSymb from "./UI/MinSymb";
import { Entypo } from '@expo/vector-icons';
import AppButton from "./UI/AppButton";



const AddTodos = ({onSubmit}) => {
    const [todoValue, setTodoValue] = useState('')

    const pressHandler = () => {
        if (todoValue.trim().length < 2) {
            MinSymb()
        } else if (todoValue.trim()) {
            onSubmit(todoValue)
            setTodoValue("")
            Keyboard.dismiss()
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
            <AppButton onPress={pressHandler}>
                <Entypo name="add-to-list" size={24}/>
            </AppButton>
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