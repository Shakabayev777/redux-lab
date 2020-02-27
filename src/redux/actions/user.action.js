export const setUser = user => {
    return {
        type: 'SET USER',
        payload: user,
    }
}
export const setLoading = status => {
    return {
        type: 'SET LOADING',
        payload: status,
    }
}
