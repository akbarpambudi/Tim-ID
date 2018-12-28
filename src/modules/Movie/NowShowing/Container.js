import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NowShowingWidget from './Widget';
import incredibles from './../../../../assets/incredibles.jpg';
const MOVIES = [
    {title:"Increadables",
        banner: incredibles,
        genres: ["Action","Animation","Comedy"],
        isBuyMode:true},
        {title:"Increadables 2",
        banner: incredibles,
        genres: ["Action","Animation","Comedy"],
        isBuyMode:true},
        {title:"Increadables 3",
        banner: incredibles,
        genres: ["Action","Animation","Comedy"],
        isBuyMode:true},
        {title:"Increadables 4",
        banner: incredibles,
        genres: ["Action","Animation","Comedy"],
        isBuyMode:true},
        {title:"Increadables 5",
        banner: incredibles,
        genres: ["Action","Animation","Comedy"],
        isBuyMode:true}

]

export class NowShowingWidgetContainer extends Component {
  state = {
      selectedMovieItem: Math.round(MOVIES.length/2)-1
  }

  render() {
    return (
        <NowShowingWidget 
            movies={MOVIES}
            selectedMovieIndex={this.state.selectedMovieItem}
            handleGetItem={(movie,index)=>this.setState({selectedMovieItem:index})}
        />
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NowShowingWidgetContainer)
