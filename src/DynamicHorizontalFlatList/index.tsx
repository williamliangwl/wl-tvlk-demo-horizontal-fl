import React from 'react';
import {FlatList, ScrollView, LayoutChangeEvent} from 'react-native';
import DynamicContent from '../components/DynamicContent';
import TabHeaderList from '../components/TabHeaderList';
import { tabContentHeights } from '../constants';
import { NavigationStackOptions } from 'react-navigation-stack';

type Props = {
}

interface State {
  activeIndex: number;
}


export default class DynamicHorizontalFlatList extends React.PureComponent<Props, State> {
  private tabHeights : {[key: number]: number} = {};
  private flatList: FlatList<any> | null = null;

  static navigationOptions: NavigationStackOptions = {
    title: 'Dynamic Horizontal FlatList'
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  handleIndexChanged = (index: number) => {
    this.setState({ activeIndex: index });
    if (this.flatList) {
      this.flatList.scrollToIndex({index});
    }
  }

  handleOnLayout = ({nativeEvent: {layout: {height}}}: LayoutChangeEvent, index: number) => {
    if (this.tabHeights[index] && height <= this.tabHeights[index]) {
      return;
    }

    this.tabHeights[index] = height;
  }

  renderItem = ({item: height, index}: {item: number, index: number}) => {
    return <DynamicContent height={height} onLayout={(e) => this.handleOnLayout(e, index)}/>;
  }

  keyExtractor= (_: any, index: number) => index + '';

  render() {
    const {activeIndex} = this.state;
    const height = this.tabHeights[activeIndex] || 'auto';

    return (
      <ScrollView nestedScrollEnabled={true}>
        <DynamicContent height={200} />
        <TabHeaderList onIndexChanged={this.handleIndexChanged} />
        <FlatList
          ref={el => (this.flatList = el)}
          horizontal
          data={tabContentHeights}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          contentContainerStyle={{ height }}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={1}
          scrollEnabled={false}
        />
      </ScrollView>
    );
  }
}