import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({ posts }: { posts: any }) => {
    return (
        <FlatList data={posts}
            keyExtractor={(item: any) => item.$id}
            renderItem={({ item }) => (
                <Text className='text-3xl text-black'>{item.id}</Text>
                // <View className='flex-row items-center justify-between mb-4'>
                //     <View className='flex-row items-center'>
                //         <View className='w-10 h-10 bg-gray-200 rounded-full'></View>
                //         <View className='ml-3'>
                //             <Text className='text-base font-pmedium text-black'>
                //                 {item.id}
                //             </Text>
                //             <Text className='text-sm font-pregular text-gray-400'>
                //                 {item.description}
                //             </Text>
                //         </View>
                //     </View>
                //     <View>
                //         <Text className='text-base font-pmedium text-black'>
                //             {item.time}
                //         </Text>
                //     </View>
                // </View>
            )} horizontal
        ></FlatList>
  )
}

export default Trending