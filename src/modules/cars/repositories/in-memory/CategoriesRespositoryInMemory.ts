import { Category } from '@modules/cars/infra/typeorm/entities/Category';

import {
  ICategoriesReporitory,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesReporitory {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    return this.categories.find(category => category.name === name);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}

export { CategoriesRepositoryInMemory };