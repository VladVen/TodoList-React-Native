import React, {useContext, useEffect, useState} from "react";
import {Dimensions, FlatList, Image, StyleSheet, View} from "react-native";
import AddTodos from "../Components/AddTodos";
import Todos from "../Components/Todos";
import Theme from "../Theme";
import {TodoContext} from "../Context/todo/todoContext";
import {ScreenContext} from "../Context/screen/screenContext";


const MainScreen = () => {

    const {addTodo, todos, removeTodo} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - Theme.PADDING_HORIZONTAL * 2)

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - Theme.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }
        const  subscription = Dimensions.addEventListener('change', update)
        return () => subscription.remove()

    }, )

    return (
        <View>
            <AddTodos onSubmit={addTodo}/>
            {todos.length
                ? <View style={{width: deviceWidth}}>

                    <FlatList style={styles.todos}
                              data={todos}
                              keyExtractor={item => item.id}
                              renderItem={({item}) => (
                                  <Todos todos={item} removeTodo={removeTodo} changeScreen={changeScreen}/>)}
                    />
                </View>
                : <View style={styles.imageWrap}>
                    <Image style={styles.image} source={require('../../assets/no-items.png')}/>
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