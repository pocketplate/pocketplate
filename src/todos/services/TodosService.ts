import { ITodo } from '../models/Todo';
import { injectable } from 'inversify';

export interface ITodosService {
  getAll(): Promise<ITodo[]>;
}

@injectable()
export class TodosService {
  // @inject(ApplicationConfiguration)
  // private applicationConfiguration: ApplicationConfiguration;

  // @inject(RestClient)
  // private restClient: RestClient;

  getAll(): Promise<ITodo[]> {
    return Promise.resolve([]);
  }

  private getTodoUrl(): string {
    return null;
  }
}
