import * as React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { ConnectState } from 'models/connect';
import GlobalStyles, { HomeStyles } from 'styles/index.css'

export interface TestProps {
  user: any;
}

class Test extends React.Component<TestProps> {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={require('assets/images/bg-page.png')} style={GlobalStyles.container}>
        
      </ImageBackground >
    )
  }
}

export default connect(({ home }: ConnectState) => {
  return {
    user: home.user,
  }
})(Test);