import React, {useState} from "react";
import {Button, Text, View, StyleSheet} from "react-native";
import Theme from "../Theme";
import AppCard from "./UI/AppCard";
import EditModal from "../Components/EditModal";


const TodoScreen = ({setTodoId, todo, removeTodo,onSave}) => {

    const [modal, setModal] = useState(false)

    return (
        <View style={style.container}>
            <AppCard style={style.card}>
                <Text style={style.title}>
                    {todo.title}
                </Text>
                <Button title={'Edit'} onPress={() => setModal(true)}/>
            </AppCard>
            <EditModal visible={modal} onClose={setModal}
                       value={todo.title} removeTodo={removeTodo}
                       onSave={onSave} id={todo.id}
            />
            <View style={style.buttons}>
                <View style={style.button}>
                    <Button title={'Go Back'} onPress={() => setTodoId(null)} color={Theme.goBackColor}/>
                </View>
                <View style={style.button}>
                    <Button title={'Delete'} color={Theme.deleteColor}
                            onPress={() => removeTodo(todo.id)}
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {},
    buttons: {
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    card: {
        marginBottom: 20
    },
    button: {
        width: '30%'
    },
    title: {
        fontSize: 20
    }
})


export default TodoScreen