import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.get('/', (request, response) => {
  const categories = categoriesRepository.list();
  return response.json({ categories });
});

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ description, name });

  return response.status(201).send();
});

export { categoriesRouter };
