import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todo.actions';
import { IAction } from '../models/action.model';
import { ITodo } from '../models/todo.model';

export function todoReducer (state: Array<ITodo> = [], action: IAction) {
    switch (action.type) {
    case ADD_TODO:
        return [
            ...state,
            Object.assign(
                {},
                {
                    id: action.payload.id,
                    description: action.payload.description,
                    responsible: action.payload.responsible,
                    priority: action.payload.priority,
                    done: false
                })
        ];
    case REMOVE_TODO:
        return state.filter(todo => todo.id !== action.payload.id);
    case TOGGLE_TODO:
        return state.map(todo => {
            if (todo.id !== action.payload.id) {
                return todo;
            }
            return Object.assign(
                {},
                todo,
                {
                    done: !action.payload.done
                });
        });
    default:
        return state;
    }
}
