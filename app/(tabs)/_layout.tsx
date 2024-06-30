import { Tabs, Redirect } from 'expo-router';
import React from 'react';
import { icons } from "../../constants"
import { Ionicons, Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import Home from './home';
import { View, Image, Text } from 'react-native';

const TabIcon = ({ icon, color, name, focused }: { icon: any, color: any, name: any, focused: any }) => {
  return (
    <View className='items-center justify-center'>
      <Image source={icon} resizeMode='contain' tintColor={color} className='w-1 h-1'></Image>
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3e523a",
          tabBarInactiveTintColor: "#5e7a58",
          tabBarStyle: {
            borderTopColor: '#3e523a',
            borderTopWidth: 0.5,
            height: 85
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="w-full items-center justify-center justify-items-center gap-1 mt-2">
                <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={color} />
                <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="w-full items-center justify-center justify-items-center gap-1 mt-2">
                <Ionicons name={focused ? 'search-sharp' : 'search-outline'} size={24} color={color} />
                <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                Explore
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="w-full items-center justify-center justify-items-center gap-1 mt-2">
              <FontAwesome name={focused ? 'bookmark' : 'bookmark-o'} size={22} color={color} />
                <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                Bookmarks
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="w-full items-center justify-center justify-items-center gap-1 mt-2">
              <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={24} color={color} />
                <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                About Us
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="w-full items-center justify-center justify-items-center gap-1 mt-2">
              <FontAwesome name={focused ? 'user-circle' : 'user-circle-o'} size={24} color={color} />
                <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
