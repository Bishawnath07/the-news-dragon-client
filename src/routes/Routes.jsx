import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Termes from "../Pages/Shared/Terms/Termes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to = " /category/0"></Navigate>
            },
            {
            path: '/login' , 
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/terms' ,
            element: <Termes></Termes>
        }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            
            {path: ':id' , element: <Category></Category> , loader: ({params}) => fetch(`https://the-news-dragon-server-bishawnath07.vercel.app/categories/${params.id}`) }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {path: ':id' , element: <PrivetRoute><News></News></PrivetRoute> , loader: ({params}) => fetch (`https://the-news-dragon-server-bishawnath07.vercel.app/news/${params.id}`)}
        ]
    }
])


export default router;