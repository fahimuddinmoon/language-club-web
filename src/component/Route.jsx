import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import FindTutors from "./FindTutors";
import AddTutorials from "./AddTutorials";
import MyTutorials from "./MyTutorials";
import MyBookedTutors from "./MyBookedTutors";
import Login from "./Login";
import Register from "./Register";
import CourseDetails from "./CourseDetails";
import UpdatePage from "./UpdatePage";
import ErrorPage from "./ErrorPage";
import PrivateRoute from './PrivateRoute';
import CategoryDetail from "./CategoryDetail";
import CategoryDetail2 from './CategoryDetail2'
import CategoryDetail3 from './CategoryDetail3'
import CategoryDetail4 from './CategoryDetail4'
import CategoryDetail5 from './CategoryDetail5'
import CategoryDetail6 from './CategoryDetail6'
import CategoryDetail7 from './CategoryDetail7'
import CategoryDetail8 from './CategoryDetail8'
import CategoryDetail9 from './CategoryDetail9'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/add-tutorials",
        element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>,
      },
      {
        path: "/my-tutorials",
        element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>,
      },
      {
        path: "/my-booked-tutors",
        element: <PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/detail/:_id",
        element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
      },
      {
        path: "/update/:_id",
        element: <UpdatePage></UpdatePage>
      },
      {
        path: "/category/1",
        element: <CategoryDetail></CategoryDetail>
      },
      {
        path: "/category/2",
        element: <CategoryDetail2></CategoryDetail2>
      },
      {
        path: "/category/3",
        element: <CategoryDetail3></CategoryDetail3>
      },
      {
        path: "/category/4",
        element: <CategoryDetail4></CategoryDetail4>
      },
      {
        path: "/category/5",
        element: <CategoryDetail5></CategoryDetail5>
      },
      {
        path: "/category/6",
        element: <CategoryDetail6></CategoryDetail6>
      },
      {
        path: "/category/7",
        element: <CategoryDetail7></CategoryDetail7>
      },
      {
        path: "/category/8",
        element: <CategoryDetail8></CategoryDetail8>
      },
      {
        path: "/category/9",
        element: <CategoryDetail9></CategoryDetail9>
      },
    ]
  },
]);

export default router