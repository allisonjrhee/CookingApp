import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons';


const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyboardType, ...props }:
  {
    title: any, value: any, placeholder: any, handleChangeText: any, otherStyles: any, keyboardType?:any
  }) => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">
        {title}
      </Text>
      <View className="w-full h-16 px-4 bg-white rounded-2xl focus:border-red-500 items-center flex-row">
        <TextInput className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title==='Password' && !showPassword} 
          keyboardType={keyboardType}/>
        
        {title === 'Password' && (
          <TouchableOpacity onPress={() =>
          setShowPassword(!showPassword)}>
              <FontAwesome name={!showPassword ? 'eye' : 'eye-slash'} size={24}/>
          </TouchableOpacity> )}

      </View>
    </View>
  )
}

export default FormField