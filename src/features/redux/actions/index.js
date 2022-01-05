import types from '../constants'

// Helper functions to dispatch actions, optionally with payloads
export const add = (todo) => {
    return {
        type: types.ADD,
        payload: todo
    };
};

export const remove = (todo) => {
    return {
        type: types.REMOVE,
        payload: todo
    };
};

export const toggle = (todo) => {
    return {
        type: types.TOGGLE,
        payload: todo
    };
};

export const update = (id, text)=> {
    return {
        type: types.UPDATE,
        payload: { id, text }
    }
};
