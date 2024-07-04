import { Navigate, createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";
import Sample from "./pages/Sample";
import ArticleDetail from "./pages/ArticleDetails";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/Signup";
export const token = localStorage.getItem("access_token");
const basename = "/";

export const router = createBrowserRouter([
    {
        path: "/",
        element: token? <Applayout /> : <Navigate to="/login" />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "sample",
                element: <Sample />,
            },
            {
                path: "empty",
                element: <Empty />,
            },
            {
                path: "articles/:id", // Define a route with a parameter for the article ID
                element: <ArticleDetail />,
                
              },
              
        ],
    },
    {
        path: "*",
        element: <NoMatch />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "forgotPassword",
        element: <ForgotPassword />,
    },
    {
        path: "signUp",
        element: <SignUp />,
    },
], {
    basename: basename
})
