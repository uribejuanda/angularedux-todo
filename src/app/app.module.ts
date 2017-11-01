import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './reducers/todo.reducer';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        TodoInputComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({
            todo: todoReducer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25 // Retain last 25 states
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
