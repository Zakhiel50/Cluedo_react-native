import React, { useState } from "react";
import { View, Text } from "react-native"
import style from "./Style";
import CheckBox from "expo-checkbox"

import Data from "./data/DataBase"


const Suspects = () => {
    const [selectedObject, setSelectedObject] = useState({});

    const handleCheckboxChange = (checkboxName) => {
        setSelectedObject((prevSelectedObject) => ({
            ...prevSelectedObject,
            [checkboxName]: !prevSelectedObject[checkboxName],
        }));
    };
    
    return (
            <View style={style.container}>
                {Data.suspects.map((suspect, index) => (
                    <View key={index} style={style.checkboxContainer}>
                        <CheckBox
                        value={selectedObject[suspect.name] || false}
                        onValueChange={() => handleCheckboxChange(suspect.name)}
                        style={style.checkbox} />
                        <Text style={style.textName}>{suspect.label}</Text>
                    </View>
                ))}
            </View>
    )
    
}

export default Suspects