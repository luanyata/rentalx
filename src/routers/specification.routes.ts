import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/userCases/createSpecification';

const specificationsRouter = Router();

specificationsRouter.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRouter };
