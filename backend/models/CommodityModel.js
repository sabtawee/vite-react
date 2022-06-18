const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize
const Commodity = db.define('commodity', {
    commodity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    commodity:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
})

module.exports = Commodity