import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./admin/routes/AppRoutes";
import { ToastContainer } from "react-toastify";
// import "./styles/fonts.css";


const App = () => {
  return (
    <div >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </div>
  );
};

export default App;
