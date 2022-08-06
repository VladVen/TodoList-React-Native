import React, {useCallback, useContext, useEffect, useState} from "react";
import {Dimensions, FlatList, Image, StyleSheet, View} from "react-native";
import AddTodos from "../Components/AddTodos";
import Todos from "../Components/Todos";
import Theme from "../Theme";
import {TodoContext} from "../Context/todo/todoContext";
import {ScreenContext} from "../Context/screen/screenContext";
import AppLoader from "../Components/UI/AppLoader";
import AppText from "../Components/UI/AppText";
import AppButton from "../Components/UI/AppButton";
import {AntDesign} from "@expo/vector-icons";


const MainScreen = () => {

    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - Theme.PADDING_HORIZONTAL * 2)

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])
    useEffect(() => {
        loadTodos()
    }, [])

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - Theme.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }
        const  subscription = Dimensions.addEventListener('change', update)
        return () => subscription.remove()

    }, )

    if(loading) {
        return <AppLoader />
    }

    if(error) {
        return (
            <View style={styles.center}>
                <AppText style={styles.error}>
                    {error}
                </AppText>
                <AppButton onPress={loadTodos}>
                    <AntDesign name="reload1" size={24} color="white" />
                </AppButton>
            </View>
        )
    }
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
                              inverted={true}
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
        paddingTop: 20,
        paddingBottom: 20
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
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    error: {
        fontSize: 24,
        color: Theme.deleteColor,
        marginBottom: 20
    }
})

export default MainScreen