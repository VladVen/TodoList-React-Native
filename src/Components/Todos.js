import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import Theme from "../Theme";

const Todos = ({todos, removeTodo, setTodoId}) => {
    return (
        <TouchableOpacity onPress={() => setTodoId(todos.id)}
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
        borderColor: Theme.mainColor,
        borderRadius: 5,
        marginBottom: 10
    }
})

export default Todos