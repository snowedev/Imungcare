import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../css/login.css';
import '../css/home.css';
import '../css/logfind.css';
import '../css/map.css';
import '../css/signup.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element
  id: 'com.imungcare', // App bundle ID
  name: 'imungcare', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {}
  },
  // App root methods
  methods: {},
  // App routes
  routes: routes,
  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});
/*
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
*/

// 인증 확인
if (firebase.auth().currentUser) {
  $$('.li-join').hide();
  $$('.li-login').hide();
  $$('.li-profile').show();
  $$('.li-logout').show();
} else {
  $$('.li-join').show();
  $$('.li-login').show();
  $$('.li-profile').hide();
  $$('.li-logout').hide();
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    //로그인이 되어 있을 때 화면 띄우는 코드
    //location.href = 'map.f7.html';
    /*
    $$('.li-join').hide();
    $$('.li-login').hide();
    $$('.li-idpass').hide();
    */
    $$('.li-profile').show();
    $$('.li-logout').show();
    $$('.li-map').show();
    //$$(location).attr('href', 'map.f7.html');  

  } else {
    // 로그인이 안되어 있을 때
    //$('#li-signout').hide();

    $$('.li-join').show();
    $$('.li-login').show();
    $$('.li-idpass').show();
    /*
    $$('.li-profile').hide();
    $$('.li-logout').hide();
    $$('.li-map').show();
    */
  }
});

$$('.logout').on('click', function () {
  firebase.auth().signOut();
  app.dialog.alert('로그아웃 되었습니다.', '아이멍케어');
  app.views.main.router.navigate('/', {
    reloadCurrent: true,
    ignoreCache: true,
  });
});
// 로그아웃 