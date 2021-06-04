import React, {useCallback} from 'react';
import {useToast} from './Toast' ;

export default ({ name }) => {
const {ifxSuccessToast} = useToast();
const showToast = useCallback(()=>ifxErrorToast('Successfully Fetched  Channels'),[]);
return (
  <div>
    <h1>Hello {name}!</h1>
    <button onClick={showToast}>Show me a toast</button>  
  </div>
)  
};
