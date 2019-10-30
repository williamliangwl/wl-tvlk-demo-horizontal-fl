import React, { PureComponent } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { routeKeys } from '../constants'
import { NavigationDescriptor } from 'react-navigation'
import { NavigationStackOptions } from 'react-navigation-stack';

type Props = NavigationDescriptor;

export default class Home extends PureComponent<Props> {
  static navigationOptions: NavigationStackOptions = {
    title: 'Home'
  }

  handleNavigate = (key: string) => {
    this.props.navigation.navigate(key);
  }

  render() {
    return (
      <View>
        {Object.values(routeKeys).filter(val => val !== routeKeys.Home).map((val) => {
          return (
            <View key={val} style={styles.button}>
              <Button title={val} onPress={() => this.handleNavigate(val)}/>
            </View>
          );
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  }
})
