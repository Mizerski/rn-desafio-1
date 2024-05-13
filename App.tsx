import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import { Home } from "@/routes/home";

const Stack = createNativeStackNavigator();

function App() {
    const [fontsLoaded, fontError] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;