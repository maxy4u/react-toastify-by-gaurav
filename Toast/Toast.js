import React, { memo } from "react";


const Toast = memo(({header, content, closeToast, ...props})=>{
  console.log(props, closeToast);
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