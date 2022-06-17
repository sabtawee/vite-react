const Member = require("../models/MemberModel");

const Login = async (req, res) => {
  try {
    let f_name = req.body.f_name;
    let password = req.body.password;
    const result = await Member.sequelize.query(
      `SELECT * FROM members WHERE f_name = '${f_name}' AND password = '${password}'`
    );
    res.json(result[0]);
    console.log(result[0])
  } catch (error) {
    console.log({ message: error.message });
  }
};

module.exports = { Login };
