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
import AdminBoard from "../Pages/AdminBoard/AdminBoard"
import MyOrders from "../Pages/MyOrders/MyOrders"
import Payment from "../Payment/Payment"
import Blog from "../Pages/Blog/Blog"

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
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-farhadbgd.vercel.app/categories/${params.category}`),


            },
            {
                path: '/category/:id',
                element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-farhadbgd.vercel.app/category/${params.id}`),


            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,

            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },


        ]

    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: < ErrorPage />,
        children: [
            {
                path: '/dashboard/admin',
                element: <AdminBoard></AdminBoard>
            },
            {
                path: '/dashboard/seller',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/buyer',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-farhadbgd.vercel.app/bookings/${params.id}`)
            },
        ]
    }


])

export default router
