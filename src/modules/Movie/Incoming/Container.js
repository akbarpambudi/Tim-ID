import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import IncomingMovieWidget from './Widget';
import incredables from './../../../../assets/incredibles.jpg';

const DUMMY_MOVIES = [
  {title:"Incredables",banner:incredables,genres:["Action","Comedy","Animation"]},
  {title:"Incredables 2",banner:incredables,genres:["Action","Comedy","Animation"]},
];
export class InComingMovieWidgetContainer extends Component {

  render() {
    return (
        <IncomingMovieWidget movies={DUMMY_MOVIES}/>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(InComingMovieWidgetContainer)
