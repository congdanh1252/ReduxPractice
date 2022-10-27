/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';

import { changeCount } from './src/actions/count';

const App = (props) => {
  const { count } = props.count

  const incrementCount = () => {
    let { count, action } = props
    count++
    action?.changeCount(count)
  }

  const decrementCount = () => {
    let { count, action } = props
    count--
    action?.changeCount(count)
  }

  return (
    <View styles={styles.container}>
      <Button
        title="increment"
        onPress={incrementCount}
      />
      <Text style={styles.count}>{count}</Text>
      <Button
        title="decrement"
        onPress={decrementCount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  count: {
    fontSize: 16,
    color: 'black',
    marginVertical: 4,
    textAlign: 'center',
  }
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);