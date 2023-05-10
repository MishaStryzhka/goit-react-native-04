const useRoute = (isAuth) => {
    if (isAuth) {
        return <Home></Home>
    }
    return (
        <MainStack.Navigator initialRouteName="RegistrationScreen">{/* Заміна Switch */}
            <MainStack.Screen options={{ headerShown: false, }} name="RegistrationScreen" component={RegistrationScreen} />
            <MainStack.Screen options={{ headerShown: false, }} name="LoginScreen" component={LoginScreen} />
        </MainStack.Navigator>
    );
};

const routing = useRoute(userRegistered);

export default routing;