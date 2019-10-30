import React, { PureComponent } from 'react'
import { Text, View, ScrollView } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { tabContentHeights } from '../constants';
import DynamicContent from '../components/DynamicContent';
import TabHeaderList from '../components/TabHeaderList';
import { NavigationStackOptions } from 'react-navigation-stack';

interface State {
  activeIndex: number;
}

type Props = {}

export default class ScrollableTabViewSample extends PureComponent<Props, State> {
  static navigationOptions: NavigationStackOptions = {
    title: 'ScrollableTabView Sample'
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  handleIndexChanged = (index: number) => {
    this.setState({activeIndex: index});
  }

  renderTabBar = () => {
    return <View><TabHeaderList onIndexChanged={this.handleIndexChanged} /></View>;
  }

  render() {
    const {activeIndex} = this.state;
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
        <DynamicContent height={200} />
        <ScrollableTabView renderTabBar={this.renderTabBar} page={activeIndex}>
          {tabContentHeights.map(height => <ScrollView key={height}><DynamicContent height={height} /></ScrollView>)}
        </ScrollableTabView>
      </ScrollView>
    )
  }
}
