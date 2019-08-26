import { container } from '../ioc';
import { TodosService } from './services/TodosService';
import { TodoStore } from './stores/TodoStore';

container.bind<TodosService>(TodosService).toSelf().inSingletonScope();
container.bind<TodoStore>(TodoStore).toSelf().inSingletonScope();
