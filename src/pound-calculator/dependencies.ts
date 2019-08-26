import { container } from '../ioc';
import { BarStore, IBarStore } from './stores/BarStore';
import { BarService, IBarService } from './services/BarService';

container.bind<IBarStore>(BarStore).toSelf().inSingletonScope();
container.bind<IBarService>(BarService).toSelf().inSingletonScope();
