import pool from "./db_pool.cjs";
import bcrypt from "bcrypt";

async function getUserByEmail(email) {
  const { rows } = await pool.query("SELECT * FROM user WHERE email = $1", [
    email,
  ]);
  return rows[0];
}

const db_queries = {
  login: async (request, response) => {
    const { email, password } = request.body;
    try {
      const user = getUserByEmail(email);
      if (user == null) {
        return response.status(401).send("Invalid credentials");
      }
      try {
        if (await bcrypt.compare(password, user.password)) {
          response.status(200).send("Success");
        } else {
          response.status(401).send("Invalid credentials");
        }
      } catch {
        response.status(500).send();
      }
    } catch {
      response.status(500).send();
    }
  },

  getUsers: (request, response) => {
    pool.query(
      'SELECT * FROM "user" ORDER BY user_id ASC',
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  getUserById: (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(
      'SELECT * FROM "user" WHERE user_id = $1',
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  createUser: async (request, response) => {
    const { name, email, password, address, city, state, zip } = request.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      pool.query(
        'INSERT INTO "user" (name, email, password, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [name, email, hashedPassword, address, city, state, zip],
        (error, results) => {
          if (error) {
            throw error;
          }
          response.status(201).send(`User added successfully`);
        }
      );
    } catch {
      response.status(500).send();
    }
  },

  deleteUser: (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(
      'DELETE FROM "user" WHERE user_id = $1',
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
      }
    );
  },

  getPortfolioById: (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(
      "SELECT * FROM customize_portfolio WHERE user_id = $1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  getPortfolio: (request, response) => {
    pool.query(
      "SELECT * FROM customize_portfolio ORDER BY user_id ASC",
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  createPortfolio: (request, response) => {
    const { user_id, image_url, main_skill_1, main_skill_2, main_skill_3 } =
      request.body;

    pool.query(
      "INSERT INTO customize_portfolio (user_id, image_url, main_skill_1, main_skill_2, main_skill_3) VALUES ($1, $2, $3, $4, $5)",
      [user_id, image_url, main_skill_1, main_skill_2, main_skill_3],

      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Portfolio added successfully`);
      }
    );
  },

  getProjectsByUserId: (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(
      "SELECT * FROM project WHERE user_id = $1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  getProjects: (request, response) => {
    pool.query(
      "SELECT * FROM project ORDER BY user_id ASC",
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  createProject: (request, response) => {
    const {
      user_id,
      project_title,
      description,
      image_url,
      code_link,
      demo_link,
      tag,
    } = request.body;

    pool.query(
      "INSERT INTO project (user_id, project_title, description, image_url, code_link, demo_link, tag) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        user_id,
        project_title,
        description,
        image_url,
        code_link,
        demo_link,
        tag,
      ],

      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Project added successfully`);
      }
    );
  },

  getSkills: (request, response) => {
    pool.query("SELECT * FROM skill ORDER BY user_id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  },

  getSkillsByUserId: (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(
      "SELECT * FROM skill WHERE user_id = $1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  createSkill: (request, response) => {
    const { user_id, skill_name, icon_url } = request.body;

    pool.query(
      "INSERT INTO skill (user_id, skill_name, icon_url) VALUES ($1, $2, $3)",
      [user_id, skill_name, icon_url],

      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Skill added successfully`);
      }
    );
  },

  getExperiences: (request, response) => {
    pool.query(
      "SELECT * FROM experience ORDER BY user_id ASC",
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  getExperiencesByUserId: (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(
      "SELECT * FROM experience WHERE user_id = $1 ORDER BY start_year DESC",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  },

  createExperience: (request, response) => {
    const { user_id, company_name, title, start_year } = request.body;

    pool.query(
      "INSERT INTO experience (user_id, company_name, title, start_year) VALUES ($1, $2, $3, $4)",
      [user_id, company_name, title, start_year],

      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Experience added successfully`);
      }
    );
  },
};

export default db_queries;
