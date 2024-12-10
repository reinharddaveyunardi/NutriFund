import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "@/app/auth/LoginScreen";
import HomeScreen from "@/app/home/HomeScreen";
import ResetScreen from "@/app/auth/ResetScreen";
import RegisterScreen from "@/app/auth/RegisterScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BlurView} from "expo-blur";
import ProfileScreen from "./home/ProfileScreen";
import {faHome, faUser, faWheatAwnCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import TipsScreen from "./home/TipsScreen";
import {deviceWidth} from "@/utils";
import HubScreen from "./home/HubScreen";
import MarketScreen from "./home/MarketScreen";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
            <Stack.Screen name="Hub" component={HubScreen} options={{headerShown: false}} />
            <Stack.Screen name="Market" component={MarketScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

function Logged() {
    return (
        <Tabs.Navigator
            screenOptions={{
                animation: "shift",
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    height: 60,
                    backgroundColor: "rgba(255,255,255,0.9)",
                    elevation: 0,
                    marginBottom: 10,
                    marginHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    zIndex: 99,
                },
                tabBarItemStyle: {
                    width: deviceWidth / 3.15,
                    borderRadius: 10,
                },
                tabBarActiveBackgroundColor: "rgba(87, 150, 104, .8)",
                tabBarBackground: () => <BlurView tint="light" intensity={100} />,
                tabBarLabelStyle: {color: "black", fontSize: 14, fontWeight: "bold"},
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesomeIcon icon={faHome} color="black" />,
                }}
            />
            <Tabs.Screen
                name="Tips"
                component={TipsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesomeIcon icon={faWheatAwnCircleExclamation} color="black" />,
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesomeIcon icon={faUser} color="black" />,
                }}
            />
        </Tabs.Navigator>
    );
}
export default function Index() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Reset" component={ResetScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name="Logged" component={Logged} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}
