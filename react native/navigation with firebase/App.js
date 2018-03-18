import { StackNavigator, TabNavigator } from 'react-navigation';
import { LoginPage, Registration, HomePage, AboutPage, ContactPage } from './application/components';
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
      Home: {
        screen: HomePage,
        navigationOptions: () => ({
          title: "Main page"
        })
      },
      About: {
        screen: AboutPage
      },
      Contact: {
        screen: ContactPage
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
//     screen: HomePage
//   },
//   About: {
//     screen: AboutPage
//   },
//   contact: {
//     screen: ContactPage
//   },
// })

