import { inject, injectable } from 'tsyringe';

import { Car } from '../../infra/typeorm/entities/Car';
import { ICarsRepository } from '../../repositories/ICarsRepository';

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRespository: ICarsRepository,
  ) {}
  async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {
    return this.carsRespository.findAvailable(brand, category_id, name);
  }
}

export { ListAvailableCarsUseCase };
