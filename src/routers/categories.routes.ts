import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/userCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/userCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/userCases/listCategories/ListCategoriesController';

const categoriesRouter = Router();

const upload = multer({ dest: './tmp' });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouter.get('/', listCategoriesController.handle);

categoriesRouter.post('/', createCategoryController.handle);

categoriesRouter.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRouter };
