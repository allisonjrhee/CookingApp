import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { icons } from '@/constants';


const SearchInput = ({ value, titleStyle, placeholder, handleChangeText,  ...props }:
  { value: any, titleStyle?: string, placeholder: any, handleChangeText: any }) => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className="space-x-4 w-full h-10 px-4 bg-white rounded-xl focus:border-red-500 items-center flex-row">
        <TouchableOpacity>
            <FontAwesome name='search' size={22} />
        </TouchableOpacity>
        <TextInput className ="flex-1 text-black font-pregular text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText} />

        

    </View>
  )
}

export default SearchInput 