import React from 'react';
import {View, Text, FlatList, TouchableHighlight, StyleSheet} from 'react-native';

type Props = {
  onIndexChanged: (index: number) => void;
}

const data = ['A', 'B'];

export default class TabHeaderList extends React.PureComponent<Props> {
  renderItem = ({item, index}: {item: string, index: number}) => {
    const {onIndexChanged} = this.props;
    return (
      <TouchableHighlight onPress={() => onIndexChanged(index)}>
        <View style={styles.tabMenu}>
          <Text>{item}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  keyExtractor = (_: string, index: number) => index + '';

  render() {
    return (
      <FlatList horizontal data={data} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
    );
  }
}

const styles = StyleSheet.create({
  tabMenu: {
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})
