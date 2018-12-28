import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import {InComingMovieWidgetContainer} from './Incoming';
import {NowShowingWidgetContainer} from './NowShowing';
export default class Movies extends Component {
  render() {
    return (
      <ScrollView>
        <NowShowingWidgetContainer/>
        <InComingMovieWidgetContainer/>
      </ScrollView>
    )
  }
}
