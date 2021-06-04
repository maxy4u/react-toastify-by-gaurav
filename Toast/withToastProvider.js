import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { ToastContainer, toast } from 'react-toastify'
import ToastContext from "./context";
import 'react-toastify/dist/ReactToastify.css';

function withToastProvider(Component) {
  function WithToastProvider(props) {
    const {info, warning, success, error, isActive, dismiss} = toast;
    return (
      <ToastContext.Provider value={{ toast, info, warning, success, error, isActive, dismiss}}>
        <Component {...props} />
        <div className="toasts-wrapper">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            />
        </div>
      </ToastContext.Provider>
    );
  }

  return WithToastProvider;
}

export default withToastProvider;
