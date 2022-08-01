import React, {useState} from "react";
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";


const AddTodos = ({onSubmit}) => {
    const [todoValue, setTodoValue] = useState('')
    const pressHandler = () => {
        if(todoValue.trim()){
            onSubmit(todoValue)
            setTodoValue("")
        }else {
            Alert.alert('Task can not be empty')
        }
    }
    return (
        <View style={styles.addTodos}>
            <TextInput style={styles.input} value={todoValue}
                       onChangeText={setTodoValue}
                       placeholder={'Enter your task...'}
                       autoCorrect={false}
                       autoCapitalize={'none'}
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
        borderBottomColor: 'grey'
    },

});

export default AddTodos