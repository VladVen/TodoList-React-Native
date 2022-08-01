import {StatusBar} from 'expo-status-bar';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Navbar from "./src/Navbar";
import AddTodos from "./src/AddTodos";
import {useState} from "react";
import Todos from "./src/Todos";

export default function App() {

    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }])
    }
    const removeTodo = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id))
    }

    return (
        <View style={styles.container}>
            <Navbar title={'Todo App'}/>
            <View style={styles.addTodo}>
                <AddTodos onSubmit={addTodo}/>
                <FlatList style={styles.todos}
                          data={todos}
                          keyExtractor={item => item.id}
                          renderItem={({item}) => (<Todos todos={item} removeTodo={removeTodo}/>)}
                />

            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    addTodo: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    todos: {
        paddingTop: 20
    }
});
