import React, { Component,FunctionComponent } from 'react'
import { Text, View,TouchableOpacity,FlatList,ImageSourcePropType } from 'react-native'
import InComingMovieThumbnail from './Thumbnail/InComingMovieThumbnail';
import EStyleSheet from 'react-native-extended-stylesheet';
type Movie = {
  title:string,
  banner:ImageSourcePropType,
  genres:string[]
}
type Props = {
    movies:Movie[]
}
const InComingMovieWidget: FunctionComponent<Props> = props => {
  const space = () => {
    return <View style={{
      height: 50,
      width: 20
    }} />;
  };

  return <View>
        <View style={styles.header}>
          <Text style={styles.comingSoonLabel}>Coming Soon</Text>
          <TouchableOpacity>
            <Text>More > </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <FlatList data={props.movies} ItemSeparatorComponent={space} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({
        item
      }) => <InComingMovieThumbnail banner={item.banner} genres={item.genres} title={item.title} />} />
        </View>
      </View>;
};

export default InComingMovieWidget;

const styles = EStyleSheet.create({
    header:{
      flexDirection: 'row',
      justifyContent:'space-between',
      padding:5
    },
    comingSoonLabel:{
      fontSize:'1rem'
    },
    content:{
      padding:5
    }
});
