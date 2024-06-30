import { Alert, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native';

import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import { useEffect, useState } from 'react';
import { getAllPosts } from '@/lib/appwrite';
import useAppwrite from "../../lib/useAppwrite";
import PostCard from '@/components/PostCard';

export default function Home() {
  const { data: posts, refetch } = useAppwrite(getAllPosts);

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  console.log(posts)

  return ( 
    <SafeAreaView className='h-full'>
        <FlatList
          // list of data
          data={posts}
          // data={[]}
          keyExtractor={(item:any) => item.$id}
          // how to render each component
          renderItem={({ item }) => (
            <PostCard post={item}/>
          )}
          // header to the lists
          ListHeaderComponent={() => (
            <View className='my-6 px-4'>
              
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-pmedium text-sm text-secondary">
                    Welcome Back
                  </Text>
                  <Text className="text-2xl font-psemibold text-primary">
                    Allison Rhee
                  </Text>
                </View>
                <View className='mt-1.5'>
                  <Image source={images.logoSmall} className="w-9 h-10 rounded-full" resizeMode='contain'/>
                </View>
              </View>

              <View className="w-full flex-1 pt-1 pb-8">
                <Text className='text-primary text-lg font-pregular mb-3'>
                  Latest Recipes
                </Text>
                <Trending posts={[{id: 1},{id:2},{id:3}] ?? []}>
                </Trending>
              </View>

            </View>
          )}
          ListEmptyComponent={() => (
              <EmptyState 
                title="No recipes found"
                subtitle="Please try again later"
              ></EmptyState>
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>}
        />  

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
