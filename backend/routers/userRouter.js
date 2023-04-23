import express from "express";
import db_queries from "../db/db_queries.js";

const router = express.Router();

router.get("/", db_queries.getUsers);

router.get("/:id", db_queries.getUserById);

router.post("/", db_queries.createUser);

router.delete("/:id", db_queries.deleteUser);

export default router;
