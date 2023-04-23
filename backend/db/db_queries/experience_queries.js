import pool from "../db_pool.cjs";

async function getExperiencesByUserId(request, response) {
  const id = parseInt(request.user);

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
}

async function createExperience(request, response) {
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
}

export { getExperiencesByUserId, createExperience };
