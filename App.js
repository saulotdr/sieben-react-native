import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

import {
  WebView
} from 'react-native-webview';

export class SiebenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.panel}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        <WebView
          style={styles.webview}
          source={{ uri: 'http://docsystem5.clouddoc.com.br/SimplePortal/Pages/Login.html' }} 
          />
    </View>
    );
  }
}

const App: () => React$Node = () => {
  return (
    <SiebenPage/>
  );
};

let styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  panel: {
      marginTop: 100,
      flex: .1,
      backgroundColor: '#8a8a8a',
      height: 100
  }, 
  webview: {
    flex: .9,
    backgroundColor: '#8a8a8a',
  }
  });
export default App;
