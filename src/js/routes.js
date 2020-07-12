import HomePage from '../pages/home.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import SignupPage from '../pages/signup.f7.html';
import MapPage from '../pages/map.f7.html';
import LoginPage from '../pages/login.f7.html';
import LogfindPage from '../pages/logfind.f7.html';
import ProfilePage from '../pages/profile.f7.html';
import EditprofilePage from '../pages/edit-profile.f7.html';
import EditpasswordPage from '../pages/edit-password.f7.html';

var routes = [{
    path: '/',
    component: HomePage,
  },

  //----------------------------------------------
  {
    path: '/signup/',
    component: SignupPage,
  },
  {
    path: '/map/',
    component: MapPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/logfind/',
    component: LogfindPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/edit-profile/',
    component: EditprofilePage,
  },
  {
    path: '/edit-password/',
    component: EditpasswordPage,
  },
  //----------------------------------------------
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;