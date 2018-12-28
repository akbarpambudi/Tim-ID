import React, { FunctionComponent } from 'react'
import { Text, View,ImageSourcePropType,Dimensions,TouchableOpacity } from 'react-native'
import MovieThumbnail from './Thumbnail/MovieThumbnail';
import EStyleSheet from 'react-native-extended-stylesheet';
import Carousel from 'react-native-snap-carousel';

const SCREEN_WIDTH = Dimensions.get('window').width;


type Movie = {
    title:string,
    banner: ImageSourcePropType,
    genres: string[],
    isBuyMode:boolean
}

type Props = {
    movies: Movie[],
    handleGetItem:(movie:Movie,index:number)=>void,
    selectedMovieIndex:number
}

const NowShowingWidget: FunctionComponent<Props> = props => {
  const renderItem = (row) => {
      const {item,index} = row;
    return <MovieThumbnail banner={item.banner} order={index + 1} isBuyTicketMode={item.isBuyTicketMode} />;
  };

  const selectedIndex = isNaN(props.selectedMovieIndex) ? Math.round(props.movies.length / 2) - 1 : props.selectedMovieIndex;
  const selectedMovie = props.movies[selectedIndex];
  return <View style={styles.container}>
        <View style={styles.header}>
            <Text>Now Showing</Text>
            <TouchableOpacity><Text>More</Text></TouchableOpacity>
        </View>
        <View style={styles.moviesCarousel}>
        <Carousel ref={c => {
        _carousel = c;
      }} data={props.movies} renderItem={renderItem} sliderWidth={SCREEN_WIDTH} itemWidth={200} firstItem={selectedIndex} onSnapToItem={index => props.handleGetItem(props.movies[index], index)} />
        </View> 
        <View style={styles.currentMovie}>
            <Text style={styles.movieTitle}>{selectedMovie.title}</Text>
            <Text style={styles.movieGenres}>{selectedMovie.genres.join(",")}</Text>
        </View>
      </View>;
};

export default NowShowingWidget;

const styles = EStyleSheet.create({
    container:{
        padding:5
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    moviesCarousel:{

    },
    currentMovie:{
        padding:5,
        alignItems:'center'
    },
    movieTitle:{
        fontSize:'1.5rem',
        fontWeight:'bold',
        color:'$black'
    },
    movieGenres:{
        
        fontSize:'.8rem',
        color:'$darkGrey'
    }
});
