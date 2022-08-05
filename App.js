import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import React from "react";

import MainLayout from "./src/MainLayout";
import {TodoState} from "./src/Context/todo/TodoState";
import {ScreenState} from "./src/Context/screen/ScreenState";


export default function App() {

    const [loaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) {
        return <AppLoading/>
    }


    return (
        <ScreenState>
        <TodoState>
            <MainLayout/>
        </TodoState>
        </ScreenState>
    );
}


