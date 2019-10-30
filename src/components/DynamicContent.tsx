import React from 'react';
import {View, Text, StyleSheet, Dimensions, LayoutChangeEvent} from 'react-native';

type Props = {
  height: number,
  onLayout?: (e: LayoutChangeEvent) => void;
}

export default (props: Props) => {
  const { height, onLayout } = props;
  return (
    <View style={[styles.container, {height}]} onLayout={onLayout}>
      <Text style={styles.text}>{`height: ${height}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'crimson',
    borderBottomWidth: 1,
    width: Dimensions.get("screen").width,
    borderTopColor: 'crimson',
    borderTopWidth: 1,
    backgroundColor: 'rgb(7, 112, 205)'
  },
  text: {
    color: 'white'
  }
})