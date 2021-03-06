const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class Comments extends Model {}

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize,
    modelName: "comments",
    timestamps: true
    
}) 

module.exports = Comments