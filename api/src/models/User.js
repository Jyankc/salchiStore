const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  sequelize.define('user', {
    username: {
      type: DataTypes.STRING(20),
      allownull: false,
      unique: true,
      validate: {
        notEmpty: true

      }
    },
    password: {
      type: DataTypes.STRING(30),
      allownull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    firstname: {
      type: DataTypes.STRING(12),
      allownull: false,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    },
    lastname: {
      type: DataTypes.STRING(15),
      allownull: false,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    },
    phone: {
      type: DataTypes.STRING(30),
      allownull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allownull: false

    },
    email: {
      type: DataTypes.STRING(40),
      unique: true,
      validate: {
        isEmail: true

      }

    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false

    }
  })
}