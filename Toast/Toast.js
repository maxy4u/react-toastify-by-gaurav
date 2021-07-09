import React, { memo } from "react";
import useToast from "./useToast" ;


const Toast = memo(({header, content, closeToast, ...props})=>{
  console.log(props);
  const myToast = useToast();
  console.log(myToast);
  debugger;
    return (
        <div className="toast-cont">
            <header>
              <p>{header}</p>
              <span onClick={closeToast}>x</span>
            </header>
            <main>{content}</main>
        </div>
    )
});

export default memo(Toast);