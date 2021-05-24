import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './car.routes';
import { categoriesRouter } from './categories.routes';
import { rentalRouter } from './rentals.routes';
import { specificationsRouter } from './specifications.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationsRouter);
router.use('/users', usersRouter);
router.use('/cars', carsRoutes);
router.use('/rentals', rentalRouter);
router.use(authenticateRoutes);

export { router };
