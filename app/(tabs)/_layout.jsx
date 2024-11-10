import { View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24, // Equivalent to w-6
          height: 24, // Equivalent to h-6
          tintColor: color,
        }}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.home}
                color={color}
              />
            ),
          }}
        />

<Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.create}
                color={color}
              />
            ),
          }}
        />

<Tabs.Screen
          name="project"
          options={{
            title: 'Project',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.project}
                color={color}
              />
            ),
          }}
        />


<Tabs.Screen
          name="vote"
          options={{
            title: 'Vote',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.vote}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;