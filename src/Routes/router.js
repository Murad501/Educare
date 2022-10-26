import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CategoryPage from "../components/CategoryPage/CategoryPage";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetailsFull from "../components/CourseDetailsFull/CourseDetailsFull";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import LogIn from "../components/LogIn/LogIn";
import Page404 from "../components/Page404/Page404";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch(
            "https://assignment-server-site-murad501.vercel.app/allCourses"
          ),
        element: <Courses></Courses>,
      },
      {
        path: "courses",
        loader: async () =>
          fetch(
            "https://assignment-server-site-murad501.vercel.app/allCourses"
          ),
        element: <Courses></Courses>,
      },
      {
        path: "category/:id",
        loader: async ({ params }) =>
          fetch(
            `https://assignment-server-site-murad501.vercel.app/category/${params.id}`
          ),
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "course/:id",
        loader: async ({ params }) =>
          fetch(
            `https://assignment-server-site-murad501.vercel.app/course/${params.id}`
          ),
        element: <CourseDetailsFull></CourseDetailsFull>
      },
      {
        path: "checkout/:id",
        loader: async ({ params }) =>
          fetch(
            `https://assignment-server-site-murad501.vercel.app/course/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
