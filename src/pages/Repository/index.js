import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

import PropTypes from 'prop-types';

const propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  render() {
    const { navigation } = this.props;

    return (
      <WebView
        source={{ uri: navigation.getParam('repository').html_url }}
        style={{ flex: 1 }}
      />
    );
  }
}

Repository.propTypes = propTypes;
