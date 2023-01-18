import About from "../components/About/About";
import AddEvent from "../components/AddEvent/AddEvent";
import AddGallery from "../components/AddGallery/AddGallery";
import Blog from "../components/Blog/Blog";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import BlogUpdate from "../components/BlogDetails/BlogUpdate";
import AddNewBlog from "../components/Dashboard/AddNewBlog";
import AddWritter from "../components/Dashboard/AddWritter";
import ManageBlog from "../components/Dashboard/ManageBlog";
import Donate from "../components/Donate/Donate";
import EventDetails from "../components/EventDetails/EventDetails";
import EventUpdate from "../components/EventDetails/EventUpdate";
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import ManageEvent from "../components/ManageEvent/ManageEvent";
import ManageGallery from "../components/ManageGallery/ManageGallery";
import Members from "../components/Members/Members";
import Payment from "../components/Payment/Payment";
import Signup from "../components/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardLayoutRight from "../Layout/DashboardLayoutRight";
import AdminRoute from "./AdminRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/member",
        element: <Members></Members>,
      },
      {
        path: "/loginFoodBox",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blog/${params.id}`),
      },
      {
        path: "/donate",
        element: <Donate></Donate>,
      },

      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/events/:id",
        element: <EventDetails></EventDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/event/${params.id}`),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayoutRight></DashboardLayoutRight>
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard/addWritter",
        element: <AddWritter></AddWritter>,
      },
      {
        path: "/dashboard/addBlog",
        element: (
          <AdminRoute>
            <AddNewBlog></AddNewBlog>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageBlog",
        element: (
          <AdminRoute>
            <ManageBlog></ManageBlog>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageBlog/:id",
        element: (
          <AdminRoute>
            <BlogDetails></BlogDetails>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blog/${params.id}`),
      },
      {
        path: "/dashboard/manageBlog/update/:id",
        element: (
          <AdminRoute>
            <BlogUpdate></BlogUpdate>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blog/${params.id}`),
      },

      {
        path: "/dashboard/addEvent",
        element: (
          <AdminRoute>
            <AddEvent></AddEvent>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageEvent",
        element: (
          <AdminRoute>
            <ManageEvent></ManageEvent>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageEvent/:id",
        element: (
          <AdminRoute>
            <EventDetails></EventDetails>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/event/${params.id}`),
      },
      {
        path: "/dashboard/manageEvent/update/:id",
        element: (
          <AdminRoute>
            <EventUpdate></EventUpdate>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/event/${params.id}`),
      },
      {
        path: "/dashboard/addGallery",
        element: (
          <AdminRoute>
            <AddGallery></AddGallery>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageGallery",
        element: (
          <AdminRoute>
            <ManageGallery></ManageGallery>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;