export const loginAction = (login) => ({
    type:"LOGIN",
    login
})

export const loadTasks = (tasks) =>({
    type: "GET_TASKS",
    tasks
})