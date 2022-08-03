import React from "react";
import {FlatList, View, StyleSheet, Text, Image} from "react-native";
import AddTodos from "../Components/AddTodos";
import Todos from "../Components/Todos";


const MainScreen = ({addTodo, todos, removeTodo,setTodoId}) => {
    return(
        <View >
            <AddTodos onSubmit={addTodo}/>
            { todos.length
               ? <FlatList style={styles.todos}
                          data={todos}
                          keyExtractor={item => item.id}
                          renderItem={({item}) => (<Todos todos={item} removeTodo={removeTodo} setTodoId={setTodoId}/>)}
                />
                : <View style={styles.imageWrap}>
                    <Image style={styles.image} source={require('../../assets/no-items.png')} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    todos: {
        paddingTop: 20
    },
    imageWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "contain",
    }
})

export default MainScreen