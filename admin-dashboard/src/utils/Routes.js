import Signin from "../screens/auth/Signin";
import Home from "../screens/dashboardScreens/Home";
import AddUser from "../screens/dashboardScreens/users/AddUser";
import EditUser from "../screens/dashboardScreens/users/EditUser";
import Users from "../screens/dashboardScreens/users/Users";

//icons import

import { ReactComponent as homeicon } from "../assets/svg/homeicon.svg";
import { ReactComponent as settings } from "../assets/svg/Settings.svg";
import { ReactComponent as users } from "../assets/svg/Users.svg";

import AdminProfile from "../screens/dashboardScreens/users/UserProfile";
import Events from "../screens/usersScreens/Events";
import UserPannel from "../screens/usersScreens/UserPannel";
import UserProfile from "../screens/usersScreens/UserProfile";
import EditMain from "../screens/usersScreens/EditProfile/EditMain";
import Pets from "../screens/dashboardScreens/pets/Pets";
import ServicesCategories from "../screens/dashboardScreens/servicesCategories/ServicesCategories";

export const authRoutes = [
  {
    path: "sign-in",
    component: <Signin />,
  },
];
export const usersRoutes = [
  {
    path: "events",
    component: <Events />,
  },
  {
    path: "user-pannel",
    component: <UserPannel />,
  },
  {
    path: "user-profile",
    component: <UserProfile />,
  },
  {
    path:"edit-profile",
    component:<EditMain/>
  }
];

export const dashboardRoutes = [
  {
    path: "users-add",
    component: <AddUser />,
  },
  {
    path: "users-edit",
    component: <EditUser />,
  },


  {
    path: "users-profile",
    component: <AdminProfile />,
  },
];

export const sidebarRoutes = [
  {
    name: "Dashboard",
    path: "home",
    component: <Home />,
    icon: homeicon,
  },

  {
    name: "Users",
    path: "users",
    component: <Users />,
    icon: users,
  },
  
  {
    name: "Pets",
    path: "pets",
    component: <Pets />,
    icon: users,
  },

  
  /*{
    name: "Services",
    path: "services",
    component: <Services />,
    icon: settings,
  },
*/
    
  {
    name: "Service Categories",
    path: "services-categories",
    component: <ServicesCategories />,
    icon: settings,
  },
];
