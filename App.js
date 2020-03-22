import React from 'react';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset'
import { Font } from 'expo-font'
import fonts from 'app/src/fonts';
import images from 'app/src/images';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from 'app/src/navigation/MainTabNavigator'

export default class App extends React.Component {
  static defaultProps = {
    skipLoadingScreen: false
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false
    }
  }

  loadResourcesAsync = async () => {
    await Asset.loadAsync(Object.keys(images).map( key => images[key] ));
    await Font.loadAsync(fonts);
    return true;
  }

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
    return (
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    );
  }
}

