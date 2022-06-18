const Member = require("../models/MemberModel")

const Register = async (req, res) => {
    try {
        let f_name = req.body.f_name
        let l_name = req.body.l_name
        let password = req.body.password
        let email = req.body.email
        await Member.sequelize.query(`INSERT INTO members (f_name, l_name, password, email) VALUES ('${f_name}', '${l_name}', '${password}', '${email}');`)
        res.json("Register Success !!!")
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = { Register };