import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-indigo-950 h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center, items-center min-h-screenh-[85vh] px-4">
              <Image
                source={images.logo}
                className="w-[300px] h-[84px] pt-10"
                resizeMode='contain'
              />
              <Image
                source={images.portfolio}
                className="w-[200px] h-[200px]"
                resizeMode='contain'
              />
              <View className="relative mt-5">
                  <Text className="text-2xl text-white font-u_bold text-center">
                    A Display of Student Innovative Portfolio with Audience-Driven Recognition
                  </Text>
              </View>
            <Text className="text-sm, font-j_bold text-gray-100 mt-7 text-center"> Join us, Let's create One Portfolio at a time!
            </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={()=> router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622'style='light' ></StatusBar>
    </SafeAreaView>
  );
}

