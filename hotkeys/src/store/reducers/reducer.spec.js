import reducer, {defaultState} from './reducer'

describe ('Reducer', () => {
    it('gets task', () => {
        const action = {
            type: "GET_TASKS",
            tasks: [{id: 1},{id:2},{id:3}]
        }

        const newState = reducer(defaultState, action);

        expect(newState).toEqual(expect.objectContaining({
            tasks: action.tasks
        }))
    })

    it('logins', () => {
        const action = {
            type: "LOGIN"
        }

        const newState = reducer(defaultState, action);

        expect(newState).toEqual(expect.objectContaining({
            isLogined: true
        }))
    })
})