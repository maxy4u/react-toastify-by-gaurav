import React, {useCallback} from 'react';
import {useToast, Toast } from './Toast' ;

export default ({ name }) => {
const {ifxSuccessToast, ifxErrorToast, ifxInfoToast, ifxWarningToast, ifxToast} = useToast();
const showSucessToast = useCallback(()=>ifxSuccessToast(<Toast header="Call Success" content="This is success message" />),[]);
const showErrorToast = useCallback(()=>ifxErrorToast(<Toast header="Call Error" content="This is Error message" />),[]);
const showInfoToast = useCallback(()=>ifxInfoToast(<Toast header="Call Info" content="This is Info message" />),[]);
const showWarningToast = useCallback(()=>ifxWarningToast(<Toast header="Call Warning" content="This is warning message" />),[]);
const showDefaultToast = useCallback(()=>ifxToast(<Toast header="Call Default" content="This is Default message" />),[]);
return (
  <div>
    <h1>Hello {name}!</h1>
    <button onClick={showSucessToast}>Success toast</button>  
    <button onClick={showErrorToast}>Error toast</button>
    <button onClick={showInfoToast}>Info toast</button> 
    <button onClick={showWarningToast}>Warning toast</button> 
    <button onClick={showDefaultToast}>Default toast</button> 
  </div>
)  
};
