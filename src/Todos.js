import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const Todos = ({todos, removeTodo}) => {
    return (
        <TouchableOpacity onPress={() => console.log('button Pressed')}
                          onLongPress={() => removeTodo(todos.id)}>
            <View style={style.todo}>
                <Text>{todos.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#c1baba',
        borderRadius: 5,
        marginBottom: 10
    }
})

export default Todos