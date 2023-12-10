import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen"; // Import the SignUpScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            title: "Sign In"
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          leftButton={null}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen 
          name="SignUp"  // Set the name for SignUpScreen
          component={SignUpScreen} // Specify the component
          options={{
            title: "Sign Up" // Set the title for the screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
