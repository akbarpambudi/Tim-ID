import React, { Component } from 'react'
import { Text, View,ImageSourcePropType,Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
type Props = {
    banner:ImageSourcePropType,
    isBuyTicketMode:boolean,
    order:number
}
export default class MovieThumbnail extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.banner} source={this.props.banner} />
        <View style={styles.orderBadge}>
            <Text style={styles.orderBadgeText}>{this.props.order}</Text>
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
    container:{
        padding:0,
        borderRadius:20
    },
    banner:{
      width:'100%',
      borderRadius:10
    }
    ,orderBadge:{
        position: 'absolute',
        top:5,
        right:5,
        backgroundColor:'#00000050',
        width:'1.5rem',
        height:'1.5rem',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
    },orderBadgeText:{
        fontSize:'1rem',
        color:'#fff',
    }
});
