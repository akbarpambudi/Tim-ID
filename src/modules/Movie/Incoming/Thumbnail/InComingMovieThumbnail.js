import React, { Component } from 'react'
import { Text, View,Image,ImageSourcePropType,StyleProp,ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import incredibles from './../../../../../assets/incredibles.jpg';

const styles = EStyleSheet.create({
  container:{
    width:200,
    height:200
  },
  banner:{
    borderRadius:10,
    width: '100%',
    height:'80%'
  },
  title:{
    fontSize: '1.2rem',
    color:'$black'
  },
  genres:{
    fontSize:'.8rem',
    color:"$darkGrey"
  }
});

type Props = {
  banner:ImageSourcePropType,
  title:string,
  genres:string[],
  containerStyle?:StyleProp<ViewStyle>
}

export default class InComingMovieThumbnail extends Component<Props> {
  
  renderGenres = ()=>{
    const {genres} = this.props;
    if(genres){
      return (<Text style={styles.genres}>{genres.join(",")}</Text>)
    }else{
      return (<Text style={styles.genres}> none </Text>)
    }
  }

  render() {
    return (
      <View style={[styles.container,this.props.containerStyle]}>
        <Image source={this.props.banner} style={styles.banner}/>
        <Text style={styles.title}>{this.props.title}</Text>
        {this.renderGenres()}
      </View>
    )
  }
}


