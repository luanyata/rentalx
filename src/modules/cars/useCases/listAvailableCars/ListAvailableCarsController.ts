import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

interface IQuery {
  brand?: string;
  name?: string;
  category_id?: string;
}

class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, category_id, name }: IQuery = request.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase,
    );

    const cars = await listAvailableCarsUseCase.execute({
      brand,
      category_id,
      name,
    });

    return response.json(cars);
  }
}

export { ListAvailableCarsController };
