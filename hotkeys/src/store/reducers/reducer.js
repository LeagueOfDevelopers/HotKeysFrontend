export const defaultState = {
    isLogined: false,
    lesson: "",
    tasks: []
}

const reducer = (prevState = defaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...prevState,
                isLogined: true
            };
        case "GET_TASKS":
            return {
                ...prevState,
                tasks: action.tasks
            }
        case "GET_LESSON":
            return {
                ...prevState,
                lesson: action.lesson
            }
        default:
            return prevState;
    }
}

export default reducer;