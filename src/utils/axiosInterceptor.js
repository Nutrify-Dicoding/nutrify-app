import { toast } from 'react-toastify';

const errorInterceptor = (error, { navigate }) => {
    if (!error || !error.response) return;
    if (error.response.status === 401) {
        toast.error(error.response.data.message ?? "Authorization required!", { 'position': 'bottom-right' });
        if (navigate) navigate('/login');
    } else {
        toast.error(error.response.data.message ?? "Something went wrong!", { 'position': 'bottom-right' });
    }
    return Promise.reject();
};

export { errorInterceptor };
