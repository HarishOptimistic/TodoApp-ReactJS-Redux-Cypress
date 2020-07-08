const todoReducer = (state = {
    todos: [{
        "createdAt": "Wed Jul 01 2020",
        "description": "Pay house rent within second week",
        "dueBy": "12/07/2020",
        "dueByValue": "2020-07-12T06:30:00.000Z",
        "expectedHours": "1",
        "id": 8758,
        "priority": "High",
        "status": "Open",
        "title": "Pay house rent",
        "spentHours": "0"
    },
    {
        "createdAt": "Wed Jul 05 2020",
        "description": "Buy groceries needed for the month of July",
        "dueBy": "09/07/2020",
        "dueByValue": "2020-07-09T06:30:00.000Z",
        "expectedHours": "5",
        "id": 8778,
        "priority": "Medium",
        "status": "Open",
        "title": "Buy Groceries",
        "spentHours": "0"
    },
    {
        "createdAt": "Wed Jul 06 2020",
        "description": "Book LPG gas for this month",
        "dueBy": "31/07/2020",
        "dueByValue": "2020-07-31T06:30:00.000Z",
        "expectedHours": "4",
        "id": 7558,
        "priority": "Low",
        "status": "Open",
        "title": "Book Gas",
        "spentHours": "0"
    },
    {
        "createdAt": "Wed Jul 04 2020",
        "description": "Withdraw Rs.10,000 from Canara account",
        "dueBy": "13/07/2020",
        "dueByValue": "2020-07-13T06:30:00.000Z",
        "expectedHours": "3",
        "id": 607,
        "priority": "High",
        "status": "Done",
        "title": "Withdraw Cash",
        "spentHours": "0"
    },
    {
        "createdAt": "Wed Jul 08 2020",
        "description": "Wash the car and have it ready for the weekend trip",
        "dueBy": "11/07/2020",
        "dueByValue": "2020-07-11T06:30:00.000Z",
        "expectedHours": "2",
        "id": 9772,
        "priority": "Medium",
        "status": "Cancelled",
        "title": "Car wash",
        "spentHours": "0"
    }
    ],
}, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "SET_TODOLIST":
            state = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break;
        case "BULK_COMPLETE":
            state = {
                ...state,
                todos: action.payload
            }
            break;
        case "CHANGE_STATUS":
            {
                const index = state.todos.findIndex((todo) => action.payload.id === todo.id);
                state.todos[index].status = action.payload.status;
                return state = {
                    ...state,
                    todos: state.todos
                }
            }
        case "UPDATE_TODO_ITEM":
            {
                const index = state.todos.findIndex((todo) => action.payload.id === todo.id);
                state.todos[index] = action.payload;
                return state = {
                    ...state,
                    todos: state.todos
                }
            }
    }
    return state;
};

export default todoReducer;