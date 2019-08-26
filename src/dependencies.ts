import { container } from './ioc';
import { ApplicationConfiguration } from './common/configuration/ApplicationConfiguration';

container.bind<ApplicationConfiguration>(ApplicationConfiguration).toSelf().inSingletonScope();
