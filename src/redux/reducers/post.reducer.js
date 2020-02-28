const initialState = {
    postData: null,
    loading: false,
};
export  default  function (state = initialState, action) {
    switch (action.type) {
        case 'SET POST':
            return {
                ...state,
                postData: action.payload,
            };
        case 'SET LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;

    }

}
