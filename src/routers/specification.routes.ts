import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationSerive';

const specificationsRouter = Router();
const specificationRepository = new SpecificationsRepository();

specificationsRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const speficicationService = new CreateSpecificationService(
    specificationRepository,
  );

  speficicationService.execute({ description, name });

  return response.status(201).send();
});

export { specificationsRouter };
