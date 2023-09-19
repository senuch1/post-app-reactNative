import * as React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HelpPage from './pages/HelpPage'
import RegistPage from './pages/RegistPage'
import AccountPage from './pages/AccountPage'
import AuthPage from './pages/AuthPage'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"MainPage"}>
                <Stack.Screen name="RegistPage" component={RegistPage} />
                <Stack.Screen name="AccountPage" component={AccountPage} />
                <Stack.Screen name="HelpPage" component={HelpPage} />
                <Stack.Screen name="AuthPage" component={AuthPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;