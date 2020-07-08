export function setTodoList(list) {
    return {
        type: "SET_TODOLIST",
        payload: list
    };
}

export function updateTodoList(item) {
    return {
        type: "UPDATE_TODO_ITEM",
        payload: item
    };
}

export function bulkUpdate(list) {
    return {
        type: "BULK_COMPLETE",
        payload: list
    };
}

export function changeStatus(id, status) {
    return {
        type: "CHANGE_STATUS",
        payload: { id: id, status: status }
    };
}