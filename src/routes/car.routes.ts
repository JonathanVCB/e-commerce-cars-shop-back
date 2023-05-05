import { Router } from "express";
import {
  createCarController,
  createCarImageController,
  deleteCarController,
  deleteCarImageController,
  getCarsController,
  getSpecificCarController,
  listCarImageController,
  updateCarController,
} from "../controllers/car";
import {
  bodyValidator,
  isAvalidUUID,
  validateTokenMiddleware,
  verifyGoodDealMiddleware,
} from "../middlewares";
import { listBrandsController } from "../controllers/Brand";
import { carCreateSchema, carUpdateSchema } from "../schemas/car";

const carRoutes = Router();

carRoutes.post(
  "",
  validateTokenMiddleware,
  bodyValidator(carCreateSchema),
  verifyGoodDealMiddleware,
  createCarController
);

carRoutes.get("", getCarsController);
carRoutes.get("/brands", listBrandsController);
carRoutes.get("/:id", getSpecificCarController);

carRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  bodyValidator(carUpdateSchema),
  verifyGoodDealMiddleware,
  updateCarController
);

carRoutes.delete(
  "/:id",
  isAvalidUUID,
  validateTokenMiddleware,
  deleteCarController
);

carRoutes.post(
  "/image/:id",
  isAvalidUUID,
  validateTokenMiddleware,
  createCarImageController
);

carRoutes.get("/image/:id", isAvalidUUID, listCarImageController);

carRoutes.delete(
  "/image/:id",
  isAvalidUUID,
  validateTokenMiddleware,
  deleteCarImageController
);

export default carRoutes;
