import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Home from './pages/home';
import Views from './pages/views';

const Tabs = createBottomTabNavigator()

const Bar = () => {
    return(
        <Tabs.Navigator>
            <Tabs.Screen 
                name='home'
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color })=>{
                        if(focused){
                            return <Ionicons size={size} color={color} name='home'/>
                        }
                        return <Ionicons size={size} color={color} name='home-outline'/>
                    },
                }}
            />
            <Tabs.Screen 
                name='views'
                component={Views}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color })=>{
                        if(focused){
                            return <Ionicons size={size} color={color} name='lock-closed'/>
                        }
                        return <Ionicons size={size} color={color} name='lock-closed-outline'/>
                    }
                }}
            />
        </Tabs.Navigator>
    )
}

export default Bar