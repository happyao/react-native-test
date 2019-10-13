import React, { Component } from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import { changeSection } from '../redux/actions'
import { connect } from 'react-redux'
class SectionList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          style={styles.list}
          data={[
            { key: 'Home', section: 'users' },
            { key: 'Address', section: 'address' },
            { key: 'Photo', section: 'photos' },
            { key: 'Todo', section: 'todos' },
            { key: 'Posts', section: 'posts' }
          ]}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={() => {
                this.props.changeSection(item.section)
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
    changeSection: section => dispatch(changeSection(section))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionList)
