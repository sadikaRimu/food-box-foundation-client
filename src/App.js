import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
    </div>
  );
}

export default App;
