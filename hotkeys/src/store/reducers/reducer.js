const defaultState = {
    isLogined: false,
    goods: [],
    cart: []
}

const reducer = (prevState = defaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...prevState,
                isLogined: true
            };
    
        default:
            return prevState;
    }
}

export default reducer;