import { Component } from '@angular/core';
import { Todo } from './app.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [
    { task: 'Complete to-do list app', completed: false },
    { task: 'Go grocery shopping', completed: true },
    { task: 'Call mom', completed: false }
  ];
  title: any;
  showDeleted = false;
  
  addTask(task: string) {
    if (task) {
      const newTodo: Todo = { task: task, completed: false };
      this.todos.push(newTodo);
    }
  }

  completeTask(todo: Todo) {
    todo.completed = true;
  }


  removeTask(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }
}
