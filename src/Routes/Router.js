import { createBrowserRouter } from "react-router-dom"
import MyProducts from "../Dashboard/MyProducts/MyProducts"
import Main from "../Layouts/Main"
import AddProduct from "../Pages/AddProduct/AddProduct"
import CatergoriesProduct from "../Pages/CatergoriesProduct/CatergoriesProduct"
import Login from "../Pages/Signup/Login"
import Signup from "../Pages/Signup/Signup"
import SingleProduct from "../Pages/SingleProduct/SingleProduct"
import ErrorPage from "../Shared/ErrorPage"
import PrivateRoute from "../Routes/PrivateRoute"
import Home from "../Pages/Home/Home"
import DashboardLayout from "../Layouts/DashboardLayout"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: < ErrorPage />,
        children: [

            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            {
                path: '/categories/:category',
                element: <CatergoriesProduct></CatergoriesProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category}`),


            },
            {
                path: '/category/:id',
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),


            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,

            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            // {
            //     path: '/dashboard',
            //     element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
            // },

        ]

    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: < ErrorPage />,
        children: [
            {
                path: '/dashboard',
                // element: <MyProducts></MyProducts>
            },
            // {
            //     path: '/dashboard/allusers',
            //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/adddoctor',
            //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            // },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
            // },
        ]
    }


])

export default router
