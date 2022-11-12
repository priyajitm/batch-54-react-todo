const AppReducer = (state, action) => {
    switch(action.type) {
        case 'TASKS_DATA':
            return {
                ...state,
                tasks: [...state.tasks, ...action.payload]
            }
        case 'NEW_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'UPDATE_TASKLIST':
            return {
                ...state,
                tasks: [...action.payload]
            }
        default:
            return state
    }
}

export default AppReducer