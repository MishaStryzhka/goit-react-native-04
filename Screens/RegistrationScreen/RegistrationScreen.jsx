import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const RegistrationScreen = ({ toggleRegistered }) => {
    const [name, setName] = useState({
        is: true,
        value: "",
    });
    const [email, setEmail] = useState({
        is: true,
        value: "",
    });
    const [password, setPassword] = useState({
        is: true,
        value: "",
    });



    const addImages = () => {
        Alert.alert("Add imades");
    };

    const handlerShow = () => {
        Alert.alert("Показать");
    };

    const handlerRegister = () => {
        if (!name.is) { Alert.alert("Введите логин!"); }
        else if (!email.is) { Alert.alert("Введите адрес электронной почты") }
        else if (!password.is) { Alert.alert("Введите пароль") }
        else {
            console.log("name: ", name.value, "   email: ", email.value, "  password; ", password.value)
            toggleRegistered()
            Alert.alert(`Поздравляем ${name.value}! Вы зарегистрированы.`);
        }
    };

    const nameHandler = (text) => {
        if (text === "") {
            setName({
                is: false,
                value: "",
            })
        } else {
            setName({
                is: true,
                value: text,
            })
        }
    };
    const emailHandler = (text) => {
        if (text === "") {
            setEmail({
                is: false,
                value: "",
            })
        } else {
            setEmail({
                is: true,
                value: text,
            })
        }
    };
    const passwordHandler = (text) => {
        if (text === "") {
            setPassword({
                is: false,
                value: "",
            })
        } else {
            setPassword({
                is: true,
                value: text,
            })
        }
    };

    return (
        <View style={styles.registrationContainer}>
            <View style={styles.imagesContainer}>
                <TouchableOpacity style={styles.btnAddsImages} onPress={addImages}>
                    <View style={styles.icon1} />
                    <View style={styles.icon2} />
                </TouchableOpacity>
            </View>

            <Text style={styles.titel}>Регистрация</Text>
            <TextInput
                value={name.value}
                onChangeText={nameHandler}
                placeholder="Логин"
                style={name.is ? styles.input : styles.inputEror}
                keyboardType="default"
            />
            <TextInput
                value={email.value}
                onChangeText={emailHandler}
                placeholder="Адрес электронной почты"
                style={email.is ? styles.input : styles.inputEror}
                keyboardType="email-address"
            />
            <View>
                <TextInput
                    value={password.value}
                    onChangeText={passwordHandler}
                    placeholder="Пароль"
                    style={password.is ? styles.input : styles.inputEror}
                    keyboardType="default"
                />
                <TouchableOpacity style={styles.btnShow} onPress={handlerShow}>
                    <Text>Показать</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnRegister} onPress={handlerRegister}>
                <Text style={styles.btnRegisterText}>Зарегистрироваться</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSignIn} onPress={() => { toggleRegistered() }}>
                <Text style={styles.btnSignInText}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    // Registration container

    registrationContainer: {
        position: "absolute",
        bottom: 0,
        height: 500,
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#FFFFFF",
    },

    // Container for image 

    imagesContainer: {
        position: "absolute",
        alignSelf: 'center',
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },

    // Button "add images"

    btnAddsImages: {
        position: "absolute",
        right: -12.5,
        bottom: 26.5,
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: "#FF6C00",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    icon1: {
        position: "absolute",
        width: 1,
        height: 13,
        backgroundColor: "#FF6C00",
    },
    icon2: {
        position: "absolute",
        width: 13,
        height: 1,
        backgroundColor: "#FF6C00",
    },

    // Titel "Регистрация"

    titel: {
        fontFamily: "Roboto-Medium",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        color: "#212121",

        marginTop: 92,
        marginBottom: 33,
    },

    // Input 
    input: {
        height: 50,
        padding: 16,
        borderWidth: 1,
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 8,
    },

    inputEror: {
        height: 50,
        padding: 16,
        borderWidth: 1,
        backgroundColor: "#F6F6F6",
        borderColor: "red",
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 8,
    },

    // Button Show

    btnShow: {
        position: "absolute",
        top: 14,
        right: 32,
        alignItems: "center",
        justifyContent: "center",
    },

    // Button Registr

    btnRegister: {
        height: 50,
        padding: 16,
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 100,
        alignItems: "center",

        backgroundColor: "#FF6C00",
    },

    btnRegisterText: {
        fontFamily: "Roboto-Medium",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,

        color: "#FFFFFF",
    },

    // Button SignIn

    btnSignIn: {
        alignItems: "center",
    },

    btnSignInText: {
        fontFamily: "Roboto-Medium",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
    },



});

export default RegistrationScreen;