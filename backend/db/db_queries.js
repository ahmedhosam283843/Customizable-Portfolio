import pool from "./db_pool.cjs";
const db_queries = {
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

  createUser: (request, response) => {
    const { name, email, password, address, city, state, zip } = request.body;

    pool.query(
      'INSERT INTO "user" (name, email, password, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [name, email, password, address, city, state, zip],

      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`User added successfully`);
      }
    );
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
};

export default db_queries;
