import express from "express";
import db_queries from "../db/db_queries.js";

const router = express.Router();

router.get("/", authenticateToken,db_queries.getExperiencesByUserId);

router.post("/", db_queries.createExperience);

export default router;
