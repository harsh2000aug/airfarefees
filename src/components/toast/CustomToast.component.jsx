import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hideToast } from '../../redux/notifications/notifications.action';


const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
}

const CustomToast = () => {
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.notifications)

    React.useEffect(() => {
        
        if(notifications.msg !== null) {
            switch(notifications.type) {
                case 'success': 
                    toast.success(notifications.msg, toastOptions);
                    break;
                case 'error':
                    toast.error(notifications.msg, toastOptions);
                    break;
                case 'warning':
                    toast.warn(notifications.msg, toastOptions);
                    break;
                case 'default':
                default:
                    toast(notifications.msg, toastOptions);
            }
        }
    }, [notifications])

    return(
        <>
        <ToastContainer />
        </>
    )

}

export default CustomToast;