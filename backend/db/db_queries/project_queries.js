import pool from "../db_pool.cjs";

async function getProjectsByUserId(request, response) {
  const id = parseInt(request.user);

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
}

async function createProject(request, response) {
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
    [user_id, project_title, description, image_url, code_link, demo_link, tag],

    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Project added successfully`);
    }
  );
}

export { getProjectsByUserId, createProject };
