import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Community from "../pages/Community/Community";
import SearchPage from "../pages/SearchPage/SearchPage";
import Scheduled from "../pages/Scheduled/Scheduled";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/scheduled',
          Component: Scheduled
        },
        {
          path: '/category',
          Component: Category
        },
        {
          path: '/community',
          Component: Community
        },
        {
          path: '/searchPage',
          Component: SearchPage
        }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      }
    ]
  }
]);