import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const stripePromise = loadStripe(`${process.env.REACT_APP_stripe_pk}`);

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Elements stripe={stripePromise}>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </Elements>
    </div>
  );
}

export default App;
