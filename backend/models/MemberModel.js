const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize
const Member = db.define('members', {
    member_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    f_name: {
        type: DataTypes.STRING
    },
    l_name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
})

module.exports = Member




// CREATE TABLE `members` (
//     `member_id` int(11) NOT NULL,
//     `f_name` varchar(45) NOT NULL,
//     `l_name` varchar(45) NOT NULL,
//     `password` varchar(45) NOT NULL,
//     `email` varchar(45) NOT NULL,
//     `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
//     `updateAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
//     PRIMARY KEY (`member_id`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
  