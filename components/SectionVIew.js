import React, { Component } from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
class SectionView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userDetail: {}
    }
  }

  componentDidMount () {
    if (this.props.user !== {}) {
      fetch(
        'https://jsonplaceholder.typicode.com/' + this.props.section + '/' + 1
      )
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({
            userDetail: Object.assign({}, json)
          })
        })
    }
  }

  componentDidUpdate (prevProps) {
    console.log(this.props.section, this.props.user.id)
    if (
      this.props.section !== prevProps.section ||
      this.props.user !== prevProps.user
    ) {
      fetch(
        'https://jsonplaceholder.typicode.com/' +
          this.props.section +
          '/' +
          this.props.user.id
      )
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({
            userDetail: json
          })
        })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {this.props.user && <Text>{this.state.userDetail.website}</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})
const mapStateToProps = state => {
  return {
    user: state.user,
    section: state.section
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionView)
