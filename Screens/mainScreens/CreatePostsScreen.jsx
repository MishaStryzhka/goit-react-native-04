import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IconRemoveBtn from "../../assets/icon/IconRemoveBtn.svg"
const CreatePostsScreen = ({ navigation }) => {

    const handlerRemove = () => {
        navigation.navigate("PostsScreen")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnRemove} onPress={handlerRemove}>
                <IconRemoveBtn />
            </TouchableOpacity>
            <Text>CreatePostsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },

    btnRemove: {
        height: 40,
        width: 70,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F6F6",

        position: "absolute",
        bottom: 34,

    },
});

export default CreatePostsScreen;