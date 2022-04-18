export const GET_IMAGES = 'GET_IMAGES';
export const GET_ASYNC_IMAGES = 'GET_ASYNC_IMAGES';

const initialState = {
    images: [],
}


export const imageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_IMAGES:
            return { ...state, images: payload }
        default:
            return state;
    }
}


export const getImagesAction = (payload) => ({ type: GET_IMAGES, payload })
export const getAsyncImagesAction = () => ({ type: GET_ASYNC_IMAGES })