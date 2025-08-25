import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {Tabs} from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name = "Home"
        options = {{
          title: 'Equipe',
          tabBarIcon: ({ color, size}) => <FontAwesome name = "home" color =
          {'#00008B'} size = {size} />,
          tabBarStyle: {backgroundColor: '#C0C0C0'},
          headerStyle: {backgroundColor: '#C0C0C0'},
          headerTitleStyle: {color: '#000000'}
        }}
      />
      <Tabs.Screen
        name = "Thecrawler"
        options = {{
          tabBarIcon: ({ color, size}) => <FontAwesome name = "bug" color =
          {'#FF0000'} size = {size} />,
          tabBarStyle: {backgroundColor: '#00008B'},
          headerShown: false,
          }}
      />
      <Tabs.Screen
        name = "Popstep"
        options = {{
          tabBarIcon: ({ color, size}) => <FontAwesome name = "music" color =
          {'#FF1493'} size = {size} />,
          tabBarStyle: {backgroundColor: '#4B0082'},
          headerShown: false,
          }}
      />
      <Tabs.Screen
        name = "Knuckleduster"
        options = {{
          tabBarIcon: ({ color, size}) => <FontAwesome name = "search" color =
          {'#000000'} size = {size} />,
          tabBarStyle: {backgroundColor: '#808080'},
          headerShown: false,
          }}
      />
    </Tabs>
  )
}