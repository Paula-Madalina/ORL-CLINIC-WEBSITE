import React from "react";
import "./index.css";
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from "./COMPONENTS/HEADER/Header.jsx";
import HomePage from "./COMPONENTS/HOME/HomePage.jsx";
import DoctorDescription from "./COMPONENTS/DOCTOR/DoctorDescription.jsx";
import Footer from "./COMPONENTS/FOOTER/Footer.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <Footer/>
      </>
    )
  },
  {
    path: "/aboutMe",
    element: (
      <>
        <Header />
        <DoctorDescription />
        <Footer/>
      </>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
