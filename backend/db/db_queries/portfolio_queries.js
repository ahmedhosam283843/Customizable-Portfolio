import pool from "../db_pool.cjs";

async function getPortfolioById(request, response){
    const id = parseInt(request.user);

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
  }

  

  async function createPortfolio (request, response) {
    const user_id = parseInt(request.user);
    const {image_url, main_skill_1, main_skill_2, main_skill_3 } =
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
  }

  export{
    getPortfolioById,
    createPortfolio
  }