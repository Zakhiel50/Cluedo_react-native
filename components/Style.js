import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      textAlign: "center",
    },
    checkbox: {
      alignSelf: 'center',
      width: 30,
      height: 30,
      marginLeft: 50,
    },
    label: {
      margin: 8,
    },

    title: {
        fontSize: 50,
        textAlign: "center",
        marginTop: 50,
        fontWeight: "bold",
    },
    textName: {
        marginLeft: 10,
        fontSize: 18
    },
    backgroundColor: {
        backgroundColor: "#5F8F32",
    },
    textInput: {
      width: 95+'%',
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20
    },
    hide: {
      width: 100+"%",
      height: 100+"%",
      backgroundColor: "#383838",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    textHide: {
      color: "#fff",
      fontSize: 50,
      opacity: 0.6
    }


  });