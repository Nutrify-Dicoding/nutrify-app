import { addMessage } from '../redux/slices/toastifySlice';

const errorInterceptor = (error, { navigate, dispatch }) => {
    if (error.response.status === 401) {
        if (dispatch) {
            dispatch(addMessage({
                text: "Authorization required!",
                type: "error",
                option: {
                    position: "top-right",
                },
            }));
        }
        if (navigate) navigate('/auth/signin');
    } else {
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
