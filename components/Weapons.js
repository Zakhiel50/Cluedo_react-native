import React, { useState } from "react";
import { View, Text } from "react-native"
import style from "./Style";
import CheckBox from "expo-checkbox"

import Data from "./data/DataBase"


const Weapons = () => {
    const [selectedObject, setSelectedObject] = useState({});

    const handleCheckboxChange = (checkboxName) => {
        setSelectedObject((prevSelectedObject) => ({
            ...prevSelectedObject,
            [checkboxName]: !prevSelectedObject[checkboxName],
        }));
    };
    
    return (
            <View style={style.container}>
                {Data.weapons.map((weapon, index) => (
                    <View key={index} style={style.checkboxContainer}>
                        <CheckBox
                        value={selectedObject[weapon.name] || false}
                        onValueChange={() => handleCheckboxChange(weapon.name)}
                        style={style.checkbox} />
                        <Text style={style.textName}>{weapon.label}</Text>
                    </View>
                ))}
            </View>
    )   
}

export default Weapons