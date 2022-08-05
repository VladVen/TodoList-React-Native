import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import Theme from "../Theme";
import AppTextBold from "./UI/AppTextBold";

const Todos = ({todos, removeTodo, changeScreen}) => {
    return (
        <TouchableOpacity onPress={() => changeScreen(todos.id)}
                          onLongPress={() => removeTodo(todos.id)}>
            <View style={style.todo}>
                <AppTextBold >{todos.title}</AppTextBold>
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
        marginBottom: 10,
    },
})

export default Todos