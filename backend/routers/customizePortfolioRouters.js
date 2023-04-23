import express from "express";
import db_queries from "../db/db_queries.js";

const router = express.Router();


router.get("/", db_queries.getPortfolio);
router.get("/:id", db_queries.getPortfolioById);
router.post("/", db_queries.createPortfolio);


export default router;