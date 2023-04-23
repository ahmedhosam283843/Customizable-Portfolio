import pool from "../db_pool.cjs";
import login from "./login_queries.js";
import { getUserById, deleteUser, createUser } from "./user_queries.js";
import { getPortfolioById, createPortfolio } from "./portfolio_queries.js";
import { getSkillsByUserId, createSkill } from "./skills_queries.js";
import { getProjectsByUserId, createProject } from "./project_queries.js";
import { getExperiencesByUserId, createExperience } from "./experience_queries.js";
const db_queries = {
  login: login,

  getUserById: getUserById,
  createUser: createUser,
  deleteUser: deleteUser,

  getPortfolioById: getPortfolioById,
  createPortfolio: createPortfolio,

  getProjectsByUserId: getProjectsByUserId,
  createProject: createProject,

  getSkillsByUserId: getSkillsByUserId,
  createSkill: createSkill,

  getExperiencesByUserId: getExperiencesByUserId,
  createExperience: createExperience,
};

export default db_queries;
