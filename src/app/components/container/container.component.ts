import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { ITodo } from '../../models/todo.model';
import { TOGGLE_TODO, REMOVE_TODO, ADD_TODO } from '../../actions/todo.actions';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
    public todos$;
    public priorities = ['Low', 'Medium', 'High'];

    constructor(private _store: Store<any>) {
    }

    ngOnInit() {
        this.todos$ = this._store.select('todo');
    }

    addTodo(todo: ITodo) {
        todo.id = new Date().valueOf();
        this._store.dispatch({type: ADD_TODO, payload: todo});
    }
}
