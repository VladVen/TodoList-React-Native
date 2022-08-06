import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import Navbar from "./Components/Navbar";
import TodoScreen from "./Screens/TodoScreen";
import MainScreen from "./Screens/MainScreen";
import Theme from "./Theme";
import {ScreenContext} from "./Context/screen/screenContext";


const MainLayout = () => {
    const {todoId} = useContext(ScreenContext)


    return (
        <View style={styles.wrapp}>
            <Navbar title={'Todo App'}/>
            <View style={styles.container}>
                {todoId ? <TodoScreen/> : <MainScreen/>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Theme.PADDING_HORIZONTAL,
        paddingVertical: Theme.PADDING_VERTICAL,
        flex: 1
    },
    wrapp: {
        flex: 1
    }
});

export default MainLayout