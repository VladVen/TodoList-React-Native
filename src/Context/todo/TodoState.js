import React, {useContext, useReducer} from "react";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {ADD_TODO, EDIT_TODO, REMOVE_TODO} from "../types";
import {ScreenContext} from "../screen/screenContext";
import {Alert} from "react-native";

export const TodoState = ({children}) => {
    const {changeScreen} = useContext(ScreenContext)
    const initialState = {
        todos: [{id: '1', title: 'Learn React Native'}]
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = (title) => {
        dispatch({type: ADD_TODO, title})
    }
    const removeTodo = (id) => {
        const deletingTodo = state.todos.find(item => item.id === id)
        Alert.alert(
            "",
            `Are you sure to delete this task "${deletingTodo.title}" ?`,
            [
                {
                    text: "Cancel",
                    style: "negative",
                },
                {
                    text: "Confirm",
                    onPress: () => {
                        changeScreen(null)
                        dispatch({type: REMOVE_TODO, id})
                    },
                    style: "positive",
                },

            ],
            {
                cancelable: true,
            }
        )

    }
    const updateTodo = (id, title) => {
        dispatch({type: EDIT_TODO, id, title})
    }


    return <TodoContext.Provider value={{todos: state.todos, addTodo, removeTodo, updateTodo}}>
        {children}
    </TodoContext.Provider>
}


