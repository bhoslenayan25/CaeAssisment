import React, { Component } from 'react';
import { StyleSheet, View, BackHandler,ActivityIndicator } from 'react-native';
import style from './style';

export default class ProgressDialog extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPress);
  }

  backPress = () => {
    return true
  }

  render() {

    return (
      <View style={style.container}>

        <View style={style.innerView}>
        <ActivityIndicator size="large" color="#6cba0c" />
          {this.props.route.params.message ?
            <View style={{ flexDirection: 'row' }}>
              {/* <Text style={style.message}>{this.props.route.params.message}</Text> */}
            </View>
            : null
          }
        </View>
      </View>
    );
  }
}
