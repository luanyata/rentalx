import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategorisRepository';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.get('/', (request, response) => {
  const categories = categoriesRepository.list();
  return response.json({ categories });
});

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category Already Exists' });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRouter };
