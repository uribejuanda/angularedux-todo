import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ITodo } from '../../models/todo.model';

@Component({
    selector: 'app-todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

    @Output() addTodoEvent = new EventEmitter;
    @Input() priorities;
    public todo: ITodo;

    constructor() {
    }

    ngOnInit() {
        this._resetTodo();
    }

    addTodo() {
        this.addTodoEvent.emit(this.todo);
        this._resetTodo();
    }

    private _resetTodo(): void {
        this.todo = {
            id: 0,
            description: '',
            responsible: '',
            priority: 'Low',
            done: false
        };
    }

}
