const express = require("express");
const db = require("../utils/db");
const { filterByCategory } = require("../middlewares/product.middlewares");

//
const router = express.Router();

router.get("/", filterByCategory, async (req, res) => {
  try {
    let result = await db.execute("SELECT * FROM product");
    let [rows] = result;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let result = await db.execute(
      `SELECT p.* , m.source
      FROM product as p
      INNER JOIN media as m
      ON p.product_id = m.product_id
      WHERE p.product_id =?`,
      [id]
    );
    let [rows] = result;
    let sources = [];
    let product = rows.reduce((pre, cur) => {
      sources.push(cur.source);
      return { ...cur, sources: [...sources] };
    }, {});
    delete product.source;
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

module.exports = router;
