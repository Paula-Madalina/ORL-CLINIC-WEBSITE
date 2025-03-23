import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from "./COMPONENTS/HEADER/Header.jsx";
import HomePage from "./COMPONENTS/HOME/HomePage.jsx";
import DoctorDescription from "./COMPONENTS/DOCTOR/DoctorDescription.jsx";
import Footer from "./COMPONENTS/FOOTER/Footer.jsx";
import PricesPage from "./COMPONENTS/PRICES/Prices.jsx"; 
import Estetica from "./COMPONENTS/ESTETICA/Estetica.jsx";
import DanturaFixa from "./COMPONENTS/DANTURAFIXA/DanturaFixa.jsx";
import AboutUs from "./COMPONENTS/ABOUT/AboutUs.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
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
  {
    path: "/prices", 
    element: (
      <>
        <PricesPage />
      </>
    )
  },
  {
    path: "/estetica", 
    element: (
      <>
        <Estetica />
      </>
    )
  },
  {
    path:"/dantura-fixa-si-turism-dentar",
    element: (
      <>
        <DanturaFixa />
      </>
    )
  },
  {
    path:"/despre-noi",
    element: (
      <>
        <AboutUs />
      </>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);