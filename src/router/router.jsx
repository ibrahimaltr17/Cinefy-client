import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import UpcomingProjects from "../pages/UpcomingProjects/UpcomingProjects";
import Category from "../pages/Category/Category";
import Community from "../pages/Community/Community";
import SearchPage from "../pages/SearchPage/SearchPage";


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
          path: '/upcomingProjects',
          Component: UpcomingProjects
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
]);