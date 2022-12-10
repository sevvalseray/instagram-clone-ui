import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//screens
import HomeScreen from './Screens/Home';
import SearchScreen from './Screens/Search';
import ReelsScreen from './Screens/Reels';
import ShopScreen from './Screens/Shop';
import ProfileScreen from './Screens/Profile';

//icons
import { Home, Search, Reels, ReelsFilled, Shop, ShopFilled } from './Icons';

const Tab = createBottomTabNavigator();

function Screens() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Home
                                size={24}
                                fill={focused ? "black" : undefined}
                                stroke={!focused ? "black" : undefined}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Search
                                size={24}
                                fill={!focused ? "black" : undefined}
                                stroke={focused ? "black" : undefined}
                            />
                        )
                    }
                }} />

            <Tab.Screen
                name="Reels"
                component={ReelsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused)
                            return <ReelsFilled size={24} />
                        return <Reels size={24} />
                    }
                }}
            />

            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused)
                            return <ShopFilled size={24} />
                        return <Shop size={24} />
                    }
                }} />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen} options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            style={[styles.avatar , { borderColor: focused ? '#000' :  'transparent'}]}
                            source={{
                                uri: 'https://yt3.ggpht.com/ytc/AMLnZu-o7ZAuvItUsgFHqh-C7AePfaNxNaLerW2Iw0gi_ng=s88-c-k-c0x00ffffff-no-rj-mo'
                            }} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default Screens;

const styles= StyleSheet.create({
    avatar:{
        width: 25,
        height: 25,
        borderRadius: 21,
        borderWidth: 1,
    }
})