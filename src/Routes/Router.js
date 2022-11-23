import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"
import Login from "../Pages/Signup/Login"
import Signup from "../Pages/Signup/Signup"
import ErrorPage from "../Shared/ErrorPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: < ErrorPage />,
        children: [
            // {
            //     path: '/',
            //     element: <Home />,
            // },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            // {
            //     path: '/all-homes',
            //     element: <AllHome />,
            // },
            // {
            //     path: '/coming-soon',
            //     element: <ComingSoon />,
            // },
            // {
            //     path: '/service-details/:id',
            //     element: <Details />,
            //     loader: ({ params }) =>
            //         fetch(`${process.env.REACT_APP_API_URL}/home/${params.id}`),
            // },
            // {
            //     path: '/search-result',
            //     element: <SearchResult />,
            // },
            // {
            //     path: '/checkout',
            //     element: <Checkout />,
            // },
        ],
    },
    // {
    //     path: '/dashboard',
    //     errorElement: <ErrorPage />,
    //     element: (
    //         <PrivateRoute>
    //             <DashboardLayout />
    //         </PrivateRoute>
    //     ),
    //     children: [
    //         {
    //             path: '',
    //             element: (
    //                 <PrivateRoute>
    //                     <Welcome />
    //                 </PrivateRoute>
    //             ),
    //         },
    //         {
    //             path: 'my-bookings',
    //             element: (
    //                 <PrivateRoute>
    //                     <MyBookings />
    //                 </PrivateRoute>
    //             ),
    //         },
    //         {
    //             path: 'become-host',
    //             element: (
    //                 <PrivateRoute>
    //                     <BecomeAHost />
    //                 </PrivateRoute>
    //             ),
    //         },
    //         {
    //             path: 'all-users',
    //             element: (
    //                 <AdminRoute>
    //                     <AllUsers />
    //                 </AdminRoute>
    //             ),
    //         },
    //         {
    //             path: 'all-bookings',
    //             element: (
    //                 <AdminRoute>
    //                     <AllBookings />
    //                 </AdminRoute>
    //             ),
    //         },
    //         {
    //             path: 'add-home',
    //             element: (
    //                 <HostRoute>
    //                     <AddHome />
    //                 </HostRoute>
    //             ),
    //         },
    //         {
    //             path: 'manage-homes',
    //             element: (
    //                 <HostRoute>
    //                     <ManageHomes />
    //                 </HostRoute>
    //             ),
    //         },
    //     ],
    // },
])

export default router
