import express from "express";
import db_queries from "../db/db_queries.js";

const router = express.Router();

router.get("/", db_queries.getExperiences);

router.get("/:id", db_queries.getExperiencesByUserId);

router.post("/", db_queries.createExperience);

export default router;
