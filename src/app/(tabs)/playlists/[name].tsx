import { PlaylistTracksList } from '@/components/PlaylistTracksList'
import { colors, screenPadding } from '@/constants/tokens'
import { usePlaylists } from '@/store/library'
import { defaultStyles } from '@/styles'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { ScrollView, View } from 'react-native'

const PlaylistDetailScreen = () => {
  const navigation = useNavigation()
  navigation.setOptions({
    headerTitle: '',
    headerBackVisible: true,
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTintColor: colors.primary,
  })
  const { name: playlistName } = useLocalSearchParams<{ name: string }>()
  const { playlists } = usePlaylists()
  const playlist = playlists.find((playlist) => playlist.name === playlistName)

  if (!playlist) {
    console.warn(`Playlist ${playlistName} was not found!`)
    return <Redirect href={'/(tabs)/playlists'} />
  }

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <PlaylistTracksList playlist={playlist} />
      </ScrollView>
    </View>
  )
}

export default PlaylistDetailScreen
