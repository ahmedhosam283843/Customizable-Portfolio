import pool from "../db_pool.cjs";

async function getSkillsByUserId(request, response) {
  const id = parseInt(request.user);

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
}

async function createSkill(request, response) {
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
}

export { getSkillsByUserId, createSkill };
