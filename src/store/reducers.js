export const GET_IMAGES = 'GET_IMAGES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_ASYNC_IMAGES = 'GET_ASYNC_IMAGES';
export const GET_ASYNC_DETAILS = 'GET_ASYNC_DETAILS';

const initialState = {
    images: [],
    details: [],
}


export const imageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_IMAGES:
            return { ...state, images: payload }
        case GET_DETAILS:
            return { ...state, details: payload }
        default:
            return state;
    }
}


export const getImagesAction = (payload) => ({ type: GET_IMAGES, payload })
export const getAsyncImagesAction = () => ({ type: GET_ASYNC_IMAGES })
export const getDetailsAction = (payload) => ({ type: GET_DETAILS, payload })
export const getAsyncDetailsAction = (payload) => ({type: GET_ASYNC_DETAILS, payload})