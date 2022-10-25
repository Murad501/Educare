import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'courses',
                element: <PrivateRoute><Courses></Courses></PrivateRoute>
            },
            {
                path: 'faq',
                element: <FAQ></FAQ>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router