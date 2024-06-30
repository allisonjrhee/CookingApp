import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import SearchInput from '@/components/SearchInput';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <SafeAreaView className='my-6 px-4 space-y-6'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <SearchInput placeholder="Search for recipes" 
                    value="" 
                    titleStyle={'font-psemibold text-primary w-full justify-center items-center text-2xl'}
                    handleChangeText={() => { }} />

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
