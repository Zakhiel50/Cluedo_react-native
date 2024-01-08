import React from "react";
import { TextInput } from "react-native";
import Style from "./Style"

const Note = () => {
    return (
        <TextInput
        multiline= {true}
        numberOfLines={20}
        style={Style.textInput}
        placeholder="Ecrivez vos déductions ici."
        ></TextInput>
    )
}

export default Note