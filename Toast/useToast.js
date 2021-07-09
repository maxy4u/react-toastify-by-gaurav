import { useContext, cloneElement } from 'react';
import ToastContext from './context';

function useToast() {
  const {
    toast: ifxToast={}, 
    info: ifxInfoToast={}, 
    warning: ifxWarningToast={}, 
    success: ifxSuccessToast={}, 
    error:ifxErrorToast={}, 
    isActive: ifxIsActiveToast={}, 
    dismiss: ifxDismissToast,
    } = useContext(ToastContext);
  return { ifxToast, ifxInfoToast, ifxWarningToast, ifxSuccessToast, ifxErrorToast: (content, options)=>{
    ifxErrorToast(cloneElement(content, {type:'Error'}), {...options, autoClose: false});
  }, ifxIsActiveToast, ifxDismissToast };
}

export default useToast;