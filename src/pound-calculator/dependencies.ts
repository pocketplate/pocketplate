import { container } from '../ioc';
import { BarStore, IBarStore } from './stores/BarStore';

container.bind<IBarStore>(BarStore).toSelf().inSingletonScope();
