import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRespositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRespositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRespositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRespositoryInMemory.create({
      brand: 'Brand',
      category_id: 'category_id',
      daily_rate: 100,
      description: 'Car Description',
      fine_amount: 60,
      license_plate: 'ABC-123',
      name: 'Car 1',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by brand', async () => {
    const car = await carsRespositoryInMemory.create({
      brand: 'brand_test',
      category_id: 'category_id',
      daily_rate: 100,
      description: 'Car Description',
      fine_amount: 60,
      license_plate: 'ABC-123',
      name: 'Car 2',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'brand_test',
    });
    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by name', async () => {
    const car = await carsRespositoryInMemory.create({
      brand: 'brand_test',
      category_id: 'category_id',
      daily_rate: 100,
      description: 'Car Description',
      fine_amount: 60,
      license_plate: 'ABC-123',
      name: 'car_test',
    });

    const cars = await listAvailableCarsUseCase.execute({ name: 'car_test' });
    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by category', async () => {
    const car = await carsRespositoryInMemory.create({
      brand: 'brand_test',
      category_id: '123456',
      daily_rate: 100,
      description: 'Car Description',
      fine_amount: 60,
      license_plate: 'ABC-123',
      name: 'car_test',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '123456',
    });
    expect(cars).toEqual([car]);
  });
});
