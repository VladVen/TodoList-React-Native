import React, {useEffect, useState} from "react";
import {Button, TextInput, View, StyleSheet, Modal, Alert} from "react-native";
import Theme from "../Theme";


const EditModal = ({visible, onClose, value, removeTodo, onSave, id}) => {

    const [editValue, setEditValue] = useState(value)
    useEffect(() => {
        setEditValue(value)
    }, [value])

    const saveTitle = () => {
        if(editValue.trim().length < 1) {
            removeTodo(id)
        } else if (editValue.trim().length <= 2) {
            Alert.alert(
                '',
                'The minimum title length is 3 characters.',
                [{
                    text: "Ok",
                    style: "positive",
                },],
                {
                    cancelable: true,
                }
            )
        } else {
            onSave(id, editValue)
            onClose(false)
        }
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
                    <Button title={'Cancel'} onPress={() => onClose(false)} color={Theme.deleteColor}/>
                    <Button title={'Save'} onPress={saveTitle}/>
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