export const setPosts = post => {
    return {
        type: 'SET POST',
        payload: post,
    }
};
export const setLoading = status => {
    return {
        type: 'SET LOADING',
        payload: status,
    }
};
