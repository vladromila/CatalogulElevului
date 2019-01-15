import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ justifyContent: 'center', alignContent: 'center', padding: 6, borderColor: 'black', borderWidth: 2, paddingLeft: 16, paddingRight: 16 }}
        >
          <Text style={{ fontSize: 24, fontWeight: '700', alignSelf: 'center', textAlign: 'center' }}>1</Text>
        </View>
        <View
          style={{ justifyContent: 'center', alignContent: 'center', padding: 6, borderColor: 'black', borderWidth: 2, paddingLeft: 9, paddingRight: 9 }}
        >
          <Text style={{ fontSize: 24, fontWeight: '700', alignSelf: 'center', textAlign: 'center' }}>10</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
