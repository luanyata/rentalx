import { Router } from 'express';

import { createCategoryController } from '../modules/cars/userCases/createCategory';
import { listCategoriesController } from '../modules/cars/userCases/listCategories';

const categoriesRouter = Router();

categoriesRouter.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRouter };
