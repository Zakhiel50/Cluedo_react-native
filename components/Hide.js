import React from "react";
import { View, Text } from "react-native";
import Style from "./Style"


const Hide = () => {
    return(
        <View style={Style.hide}>
            <Text style={Style.textHide}>Ecran masqué</Text>
        </View>
    )
}

export default Hide