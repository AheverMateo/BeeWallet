import { Router } from "express";
import investmentController from "./controller.js";

const router = Router();

router.post("/", investmentController.createInvestment);
router.get("/simulator", investmentController.simulateInvestment);
router.get("/wallet/:id", investmentController.getAllInvestmentByWallet);
router.get("/:id", investmentController.getInvestment);

export default router;
