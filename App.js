import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/welcome";
import HomeScreen from "./screens/home";
import SignInScreen from "./screens/signIn";
import RegisterScreen from "./screens/register";
import MyClosetScreen from "./screens/closet";
import CameraScreen from "./screens/camera";
import SimilarItemsGeneratorScreen from "./screens/similarItems";
import PairingItemsGeneratingScreen from "./screens/pairngItemsGenerator";
import OutfitGeneratorScreen from "./screens/outfitGenerator";
import CreateOutfitsScreen from "./screens/createOutfits";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="closet"
          component={MyClosetScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="camera"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="similar-items-generator"
          component={SimilarItemsGeneratorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pairing-items-generator"
          component={PairingItemsGeneratingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="outfit-generator"
          component={OutfitGeneratorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="create-outfits"
          component={CreateOutfitsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
