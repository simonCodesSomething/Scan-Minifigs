import { colors } from '@/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
<Tabs.Screen
  name="index"
  options={{
    title: "Home",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" size={size} color={color} />
    ),
  }}
/>

<Tabs.Screen
  name="scanScreen"
  options={{
    title: "Scan",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="qr-code-outline" size={size} color={color} />
    ),
  }}
/>

<Tabs.Screen
  name="SeriesDetails"
  options={{
    title: "Lists",   // <-- what the user sees
    
    tabBarIcon: ({ color, size }) => (
      <Ionicons
        name="list-circle-outline"
        size={size}
        color={color}
        
      />
    ),
  }}
/>
<Tabs.Screen
  name="settingScreen"
  options={{
    title: "More",
        tabBarIcon: ({ color, size }) => (
      <Ionicons
        name="settings-outline"
        size={size}
        color={color}
        
      />
    ),

  }}
  />


    </Tabs>
  );
}
