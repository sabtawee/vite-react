const Commodity = require("../models/CommodityModel");

const getCommodity = async (req, res) => {
  try {
    const result = await Commodity.sequelize.query(`SELECT * FROM commodity`);
    res.json(result[0]);
    console.log(result[0]);
  } catch (error) {
    console.log({ message: error.message })
  }
};


module.exports = { getCommodity }
