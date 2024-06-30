import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const PostCard = ({post: {title, body, headerPhoto, creator: {username, avatar}}}: {post: {title: string, body: string, headerPhoto: any, creator: {username: string, avatar: string}}}) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
        <View className='flex-row gap-3 items-start'>
            <View className='justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px] border border-secondary justify-center rounded-lg items-center p-0.5'>
                    <Image source={{ uri: avatar }} className='w-full h-full rounded-lg' resizeMode='cover'/>
                </View>
                <View className='justify-center flex-1 ml-3 gap-y-1'>
                    <Text className="text-2cl text-black font-psemibold" numberOfLines={1}>{title}</Text>
                    <Text className='text-xs text-secondary font-pregular' numberOfLines={1}>
                        {username}
                    </Text>
                </View>
            </View>
            <View className='pt-2'>
                <Image source={icons.menu} className='w-5 h-5' resizeMode='contain'/>
            </View>
        </View>
    </View>
  )
}

export default PostCard