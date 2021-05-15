import { container } from 'tsyringe';

import { ICategoriesReporitory } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

container.registerSingleton<ICategoriesReporitory>(
  'CategoriesRepository',
  CategoriesRepository,
);
