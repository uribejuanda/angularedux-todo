import { ITodo } from '../models/todo.model';

export interface IAction {
    readonly type: string;
    readonly payload: ITodo;
}
