import React, {useEffect, useState} from "react";
import {Button, TextInput, View, StyleSheet, Modal, Alert} from "react-native";
import Theme from "../Theme";
import MinSymb from "./UI/MinSymb";
import AppButton from "./UI/AppButton";
import { FontAwesome, MaterialIcons} from "@expo/vector-icons";


const EditModal = ({visible, onClose, value, removeTodo, onSave, id}) => {

    const [editValue, setEditValue] = useState(value)

    useEffect(() => {
        setEditValue(value)
    }, [value])

    const saveTitle = () => {
        if(editValue.trim().length < 1) {
            removeTodo(id)
        } else if (editValue.trim().length < 2) {
           MinSymb()
        } else {
            onSave(id, editValue)
            onClose(false)
        }
    }

    const onCancel = () => {
        setEditValue(value)
        onClose(false)
    }
    return (
        <Modal visible={visible} animationType={'slide'} transparent={false}>
            <View style={style.modal}>
                <TextInput style={style.input}
                           placeholder={'Enter task'}
                           autoCapitalize={"none"}
                           autoCorrect={false}
                           maxLength={300}
                           value={editValue}
                           onChangeText={setEditValue}

                />
                <View style={style.buttons}>
                    <AppButton  onPress={onCancel} color={Theme.deleteColor}>
                        <MaterialIcons name="cancel" size={24} />
                    </AppButton>
                    <AppButton onPress={saveTitle} color={Theme.submitColor}>
                        <FontAwesome name="save" size={24}  />
                    </AppButton>
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: '70%',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: Theme.mainColor
    },
    buttons: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default EditModal