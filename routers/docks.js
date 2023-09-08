import express from "express";
import {
  createDocks,
  getDocks,
  deleteDock,
  updateDock,
  updateInsideDock,
} from "../controllers/docks.js";

const router = express.Router();

router.get("/", getDocks);
router.post("/", createDocks);
router.post("/delete", deleteDock);
router.get("/update", updateDock);
router.post("/update", updateDock);

export default router;
