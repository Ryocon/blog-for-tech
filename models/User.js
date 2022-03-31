const { Model, DataTypes } = require('sequelize')

const bcrpyt = require('bcrypt')

const sequelize = require('../config/connection')


class User extends Model {
    checkPassword(pwd) {
        return bcrpyt.compareSync(pwd, this.password)
    }
}


User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    }
},

{
    hooks: {
        beforeCreate: async (newUser) => {
            newUser.password = await bcrpyt.hash(newUser.password, 15)
            return newUser
        },
        beforeUpdate: async (updateUser) => {
            updateUser.password = await bcrpyt.hash(updateUser.password, 15)
            return updateUser
        }
    },
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "user"
}
)

module.exports = User