import AddEvent from "../components/AddEvent/AddEvent";
import AddGallery from "../components/AddGallery/AddGallery";
import Blog from "../components/Blog/Blog";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import AddNewBlog from "../components/Dashboard/AddNewBlog";
import AddWritter from "../components/Dashboard/AddWritter";
import ManageBlog from "../components/Dashboard/ManageBlog";
import Donate from "../components/Donate/Donate";
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import ManageEvent from "../components/ManageEvent/ManageEvent";
import ManageGallery from "../components/ManageGallery/ManageGallery";
import Payment from "../components/Payment/Payment";
import Signup from "../components/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardLayoutRight from "../Layout/DashboardLayoutRight";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/donate',
                element: <Donate></Donate>
            },
            {
                path: '/blogDetails',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayoutRight></DashboardLayoutRight>,
        children: [
            {
                path: '/dashboard/addWritter',
                element: <AddWritter></AddWritter>
            },
            {
                path: '/dashboard/addBlog',
                element: <AddNewBlog></AddNewBlog>
            },
            {

                path: '/dashboard/manageBlog',
                element: <Blog></Blog>

            },
            {

                path: '/dashboard/addEvent',
                element: <AddEvent></AddEvent>

            },
            {

                path: '/dashboard/manageEvent',
                element: <ManageEvent></ManageEvent>

            },
            {

                path: '/dashboard/addGallery',
                element: <AddGallery></AddGallery>

            },
            {

                path: '/dashboard/manageGallery',
                element: <ManageGallery></ManageGallery>

            }
        ]
    }
]);
export default router;