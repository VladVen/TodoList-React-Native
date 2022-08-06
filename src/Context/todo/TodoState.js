import React, {useContext, useReducer} from "react";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {
    ADD_TODO,
    EDIT_TODO,
    FETCH_TODOS,
    HIDE_ERROR,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER
} from "../types";
import {ScreenContext} from "../screen/screenContext";
import {Alert} from "react-native";
import {Http} from "../../ http";

export const TodoState = ({children}) => {
    const {changeScreen} = useContext(ScreenContext)
    const initialState = {
        todos: [],
        loading: false,
        error: null
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async (title) => {
        const data = await Http.post(
            'https://todolist-react-native-vladven-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
            {title}
        )
        dispatch({type: ADD_TODO, title, id: data.name})
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
                    onPress: async () => {
                        changeScreen(null)
                        await Http.delete(
                            `https://todolist-react-native-vladven-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
                        )
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
    const updateTodo = async (id, title) => {
        clearErrors()
        try {
            await Http.patch(
                `https://todolist-react-native-vladven-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
                {title}
            )
            dispatch({type: EDIT_TODO, id, title})
        } catch (e) {
            showError('Something went wrong...')
        }

    }
    const showLoader = () => {
        dispatch({type: SHOW_LOADER})
    }
    const hideLoader = () => {
        dispatch({type: HIDE_LOADER})
    }
    const clearErrors = () => {
        dispatch({type: HIDE_ERROR})
    }
    const showError = (error) => {
        dispatch({type: SHOW_ERROR, error})
    }

    const fetchTodos = async () => {
        showLoader()
        clearErrors()
        try {
            const data = await Http.get('https://todolist-react-native-vladven-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
            const todos = data ? Object.keys(data).map(key => ({ ...data[key], id: key })) : [{}]
            dispatch({type: FETCH_TODOS, todos})
        } catch (e) {
            showError('Something went wrong...')
        } finally {
            hideLoader()
        }
    }


    return <TodoContext.Provider value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo, removeTodo, updateTodo, fetchTodos
    }}>
        {children}
    </TodoContext.Provider>
}


