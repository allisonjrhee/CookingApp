import { Image, ScrollView, View, Text } from "react-native";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants'
import CustomButton from "../components/CustomButton";

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center h-full px-4">
                    <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
                    <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover eco-friendly living with
                            <Text className="text-secondary"> Nourish</Text>
                            !
                        </Text>
                        <Image source={images.path} className="w-[130px] h-[15] absolute" style={{ position: 'absolute', top: 62, left: 150 }} />
                    </View>
                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">where good cooking meets green habits</Text>
                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7">
                    </CustomButton>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#1÷÷61622" style="light" />
        </SafeAreaView>
    );
}