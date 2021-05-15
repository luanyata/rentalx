import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/userCases/createSpecification/CreateSpecificationController';

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRouter.post('/', createSpecificationController.handle);

export { specificationsRouter };
