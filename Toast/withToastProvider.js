import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { ToastContainer, toast } from 'react-toastify'
import ToastContext from "./context";
import 'react-toastify/dist/ReactToastify.css';

function withToastProvider(Component) {
  function WithToastProvider(props) {
    const {info, warning, success, error, isActive, dismiss, ...rest} = toast;
    return (
      <ToastContext.Provider value={{ toast, info, warning, success, error, isActive, dismiss, ...rest}}>
        <Component {...props} />
        <div className="toasts-wrapper">
          <ToastContainer
            position="top-right"
            newestOnTop={false}
            autoClose={4000}
            closeButton={false}
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
