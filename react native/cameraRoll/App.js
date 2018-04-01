import { StackNavigator, TabNavigator } from 'react-navigation';
import { LoginPage, Registration, GallaryPage, AboutPage, SocialShering } from './application/components';
import * as firebase from 'firebase'


// Initialize Firebase
var config = {
};
firebase.initializeApp(config);




const Routing = StackNavigator({
  login: {
    screen: LoginPage,
  },
  signup: {
    screen: Registration,
    navigationOptions: () => ({
      title: 'Register',
      headerStyle: {
        backgroundColor: '#232323',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  Dashboard: {
    screen: TabNavigator({
      Gallary: {
        screen: GallaryPage,
        navigationOptions: () => ({
          title: "Camera Roll"
        })
      },
      About: {
        screen: AboutPage
      },
      SocialShering: {
        screen: SocialShering
      },
    }),
    navigationOptions: () => ({
      header: null
    })
  }
})

export default Routing






// export default TabNavigator({
//   Home: {
//     screen: GallaryPage
//   },
//   About: {
//     screen: AboutPage
//   },
//   contact: {
//     screen: SocialShering
//   },
// })

