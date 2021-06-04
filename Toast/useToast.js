import { useContext } from 'react';
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
  return { ifxToast, ifxInfoToast, ifxWarningToast, ifxSuccessToast, ifxErrorToast, ifxIsActiveToast, ifxDismissToast };
}

export default useToast;