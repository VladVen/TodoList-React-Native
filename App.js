import {StatusBar} from 'expo-status-bar';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Navbar from "./src/Components/Navbar";
import React, {useState} from "react";
import MainScreen from "./src/Screens/MainScreen";
import TodoScreen from "./src/Screens/TodoScreen";
import AppCard from "./src/Screens/UI/AppCard";

export default function App() {

    const [todos, setTodos] = useState([])
    const [todoId, setTodoId] = useState(null)

    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }])
    }
    const removeTodo = (id) => {
        const deletingTodo = todos.find(item => item.id === id)
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
                        setTodoId(null)
                        setTodos(prev => prev.filter(item => item.id !== id))
                    },
                    style: "positive",
                },

            ],
            {
                cancelable: true,
            }
        );

    }

    const updateTodo = (id, title) => {
        setTodos(prev => prev.map(todo => {
            if(todo.id === id) {
                todo.title = title
            }
            return todo
        }))
    }

    let selectedTodo = todos.find(todo => todo.id === todoId)
    return (
        <View>
            <Navbar title={'Todo App'}/>
            <View style={styles.container}>
                {todoId
                    ? <TodoScreen setTodoId={setTodoId} todo={selectedTodo}
                                  removeTodo={removeTodo} onSave={updateTodo} />
                    : <MainScreen addTodo={addTodo} todos={todos}
                                  removeTodo={removeTodo} setTodoId={setTodoId}
                    />
                }
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },

});
