import React, { Component } from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import { changeUser } from '../redux/actions'

import { connect } from 'react-redux'
class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      UserList: []
    }
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        var users = []
        for (var item of json) {
          users.push({ key: item.name, id: item.id, address: item.address })
        }
        this.setState({
          UserList: users
        })
      })
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          style={styles.list}
          data={this.state.UserList}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={() => {
                this.props.changeUser(item)
              }}
            >
              {item.key}
            </Text>
          )}
        />
      </View>
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

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    changeUser: user => dispatch(changeUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
