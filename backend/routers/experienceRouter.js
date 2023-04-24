import express from "express";
import db_queries from "../db/db_queries/db_queries.js";
import authenticateToken from "../middlewares/authenticateToken.js";
const router = express.Router();

router.get("/", authenticateToken, db_queries.getExperiencesByUserId);

router.post("/", authenticateToken,db_queries.createExperience);

export default router;
