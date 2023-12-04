import { toast } from 'react-toastify';

const errorInterceptor = (error, { navigate }) => {
    if (!error.response) return;
    if (error.response.status === 401) {
        toast.error(error.response.data.message ?? "Authorization required!", { 'position': 'bottom-right' });
        if (navigate) navigate('/auth/signin');
    } else if (error.response.status === 400) {
        toast.error(error.response.data.message ?? "Bad request!", { 'position': 'bottom-right' });
    } else if (error.response.status === 500 && window.location.pathname == '/') {
        return Promise.reject(error);
    } else {
        toast.error(error.response.data.message ?? "Something went wrong!", { 'position': 'bottom-right' });
        console.log(error);
    }
    return Promise.reject(error);
};

const responseInterceptor = (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
};


export { responseInterceptor, errorInterceptor };
