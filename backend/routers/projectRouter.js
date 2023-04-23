import express from "express";
import db_queries from "../db/db_queries.js";

const router = express.Router();

router.get("/", db_queries.getProjects);

router.get("/:id", db_queries.getProjectsByUserId);

router.post("/", db_queries.createProject);

export default router;
