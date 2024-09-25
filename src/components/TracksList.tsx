import { utilsStyles } from '@/styles'
import { FlatList, View } from 'react-native'
import { TrackListItem } from './TrackListItem'
import { Track } from '@/types/Track'

export type TracksListProps = {
  tracks: Track[]
  [x: string]: any
}

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles?.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
)
export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track?.artwork,
          }}
        />
      )}
      {...flatlistProps}
    />
  )
}
