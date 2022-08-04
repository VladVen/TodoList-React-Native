import React, {useState} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import Theme from "../Theme";
import AppCard from "../Components/UI/AppCard";
import EditModal from "../Components/EditModal";
import AppTextBold from "../Components/UI/AppTextBold";
import AppButton from "../Components/UI/AppButton";
import {AntDesign} from "@expo/vector-icons";


const TodoScreen = ({setTodoId, todo, removeTodo,onSave}) => {

    const [modal, setModal] = useState(false)

    return (
        <View style={style.container}>
            <AppCard style={style.card}>
                <AppTextBold style={style.title}>
                    {todo.title}
                </AppTextBold>
                <AppButton onPress={() => setModal(true)} color={Theme.submitColor}>
                    <AntDesign name="edit" size={15} />
                </AppButton>
            </AppCard>
            <EditModal visible={modal} onClose={setModal}
                       value={todo.title} removeTodo={removeTodo}
                       onSave={onSave} id={todo.id}
            />
            <View style={style.buttons}>
                <View style={style.button}>
                    <AppButton onPress={() => setTodoId(null)} color={Theme.goBackColor}>
                        <AntDesign name="back" size={24}  />
                    </AppButton>
                </View>
                <View style={style.button}>
                    <AppButton color={Theme.deleteColor}
                            onPress={() => removeTodo(todo.id)}>
                        <AntDesign name="delete" size={24} />
                    </AppButton>
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
        width: Dimensions.get('window').width / 3
    },
    title: {
        fontSize: 20
    }
})


export default TodoScreen