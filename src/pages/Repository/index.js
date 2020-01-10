import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

import PropTypes from 'prop-types';

import { Container } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  state = {
    loading: true,
  };

  render() {
    const { navigation } = this.props;
    const { loading } = this.state;

    return (
      <Container>
        {loading && (
          <ActivityIndicator color="#7159c1" style={{ paddingTop: 10 }} />
        )}
        <WebView
          source={{ uri: navigation.getParam('repository').html_url }}
          style={{ flex: 1 }}
          onLoad={() => this.setState({ loading: false })}
        />
      </Container>
    );
  }
}

Repository.propTypes = propTypes;
