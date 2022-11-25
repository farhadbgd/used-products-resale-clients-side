import { createBrowserRouter } from "react-router-dom"
import CategoriesLayout from "../Layouts/CategoriesLayout"
import Main from "../Layouts/Main"
import AddProduct from "../Pages/AddProduct/AddProduct"
import CatergoriesProduct from "../Pages/CatergoriesProduct/CatergoriesProduct"
import Login from "../Pages/Signup/Login"
import Signup from "../Pages/Signup/Signup"
import SingleProduct from "../Pages/SingleProduct/SingleProduct"
import ErrorPage from "../Shared/ErrorPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: < ErrorPage />,
        children: [

            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },

        ],

    },
    {
        path: '/categories',
        element: <CategoriesLayout></CategoriesLayout>,
        children: [
            {
                path: '/categories/:category',
                element: <CatergoriesProduct></CatergoriesProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category}`),


            }
        ]
    },
    {
        path: '/category',
        element: <CategoriesLayout></CategoriesLayout>,
        children: [
            {
                path: '/category/:id',
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),


            }
        ]
    },
    {
        path: '/addproduct',
        element: <CategoriesLayout></CategoriesLayout>,
        children: [
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>,

            }

        ]
    },
    {
        path: '/login',
        element: <CategoriesLayout></CategoriesLayout>,

        children: [


            {
                path: '/login',
                element: <Login></Login>,
            },
        ]
    },



])

export default router
