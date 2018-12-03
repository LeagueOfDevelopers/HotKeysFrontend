import reducer, {defaultState} from './reducer'

describe ('Reducer test', () => {
    it('GET_TASKS', () => {
        const action = {
            type: "GET_TASKS",
            tasks: [{id: 1},{id:2},{id:3}]
        }
        expect(reducer(defaultState, action)).toEqual({
            ...defaultState,
            tasks: action.tasks
        })
    })
})