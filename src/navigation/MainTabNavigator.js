import { Constants } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* from app */
import SearchScreen from 'app/src/screens/SearchScreen';
import HomeScreen from 'app/src/screens/HomeScreen';
import NotificationScreen from 'app/src/screens/NotificationScreen';
import UserScreen from 'app/src/screens/UserScreen';
import {
  HomeTabIcon,
  SearchTabIcon,
  TakeTabIcon,
  NotificationTabIcon,
  MeTabIcon,
  TabBar,
} from 'app/src/components/Tab';

// StackNavigatorを簡単に作れるようにするための関数です
const createTabStack = createStackNavigator();
const bottonTab = createBottomTabNavigator();

// メインのBottomTabNavigatorです。画面下部のタブ関連の処理(画面遷移等)を司ります。
export default bottomTabNavigator () {
  retrun (
    // ホームタブに関する設定を記述します。
    <Tab.Navigator
      initialRouteName="HomeTab"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}



export createBottomTabNavigator(
  {
    // ホームタブに関する設定を記述します。
    HomeTab: {
      // ホームタブのアイコンが押されたときに表示するスクリーンを定義します。
      screen: createTabStack('HomeTab', HomeScreen),
      // ホームタブのアイコンを定義します。
      navigationOptions: () => ({
        tabBarIcon: HomeTabIcon,
      }),
    },
    SearchTab: {
      screen: createTabStack('SearchTab', SearchScreen),
      navigationOptions: () => ({
        tabBarIcon: SearchTabIcon,
      }),
    },
    TakeTab: {
      screen: () => null,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: TakeTabIcon,
        tabBarOnPress: () => { // アイコンタップ時にTakeModalスクリーンを開きます。
          navigation.push('TakeModal');
        },
      }),
    },
    MeTab: {
      screen: createTabStack('MeTab', UserScreen),
      navigationOptions: () => ({
        tabBarIcon: MeTabIcon,
      }),
    },
  },
  // タブナビゲーション全体に関する設定値を記述します。
  {
    tabBarOptions: {
      showLabel: false, // タブのアイコンの下にラベルを表示しないようにします
      activeTintColor: '#333', // アクティブなタブの色を指定します。
      inactiveTintColor: '#bbb', // アクティブではないタブの色を指定します。
      style: { // タブの背景色を設定します。
        backgroundColor: Constants.manifest.extra.backgroundColor,
      },
    },
    tabBarComponent: TabBar, // タブ部分のコンポーネントを指定します。
    tabBarPosition: 'bottom', // タブバーの位置を指定します。
    animationEnabled: false, // アニメーションを無効にします。
    swipeEnabled: false, // スワイプによる画面遷移を無効にします。
  },
);