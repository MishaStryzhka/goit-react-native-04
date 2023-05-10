import React from "react";
import { View, Text, StyleSheet } from "react-native";
const PostsScreen = ({ navigation }) => {
    console.log(navigation)
    return (
        <View style={styles.container}>
            <Text>PostsScreen Screen</Text>
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
});

export default PostsScreen;