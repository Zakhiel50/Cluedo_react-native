import React, { useState } from "react";
import { View, Text } from "react-native"
import style from "./Style";
import CheckBox from "expo-checkbox"

import Data from "./data/DataBase"


const Rooms = () => {
    const [selectedObject, setSelectedObject] = useState({});

    const handleCheckboxChange = (checkboxName) => {
        setSelectedObject((prevSelectedObject) => ({
            ...prevSelectedObject,
            [checkboxName]: !prevSelectedObject[checkboxName],
        }));
    };
    
    return (

            <View style={style.container}>
                {Data.rooms.map((room, index) => (
                    <View key={index} style={style.checkboxContainer}>
                        <CheckBox
                        value={selectedObject[room.name] || false}
                        onValueChange={() => handleCheckboxChange(room.name)}
                        style={style.checkbox} />
                        <Text style={style.textName}>{room.label}</Text>
                    </View>
                ))}
            </View>
    )
    
}

export default Rooms