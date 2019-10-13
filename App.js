import React, { Component } from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import SectionView from './components/SectionVIew'
import UserList from './components/UserList'
import SectionList from './components/SectionList'

import configureStore from './redux/store'
import { Provider } from 'react-redux'
const store = configureStore()

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: 'Devin',
      section: 'Home'
    }
  }

  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UserList />
          <SectionList />
          <SectionView user={this.state.user} section={this.state.section} />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  list: {
    flexDirection: 'row'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    margin: 10,
    backgroundColor: '#99e6e6'
  }
})
