import { ITodo } from '../models/Todo';
import { observable, action } from 'mobx';
import { ITodosService, TodosService } from '../services/TodosService';
import { injectable, inject } from 'inversify';

export interface ITodoStore {
  getAll: () => Promise<void>;
  getTodos: () => ITodo[];
}

@injectable()
export class TodoStore implements ITodoStore {
  @inject(TodosService)
  private todoService: ITodosService;

  @observable
  private todos: ITodo[] = [];

  public getTodos(): ITodo[] {
    return this.todos;
  }

  @action
  public async getAll(): Promise<void> {
    this.todoService.getAll()
      .then(todos => this.todos = todos);
  }
}
