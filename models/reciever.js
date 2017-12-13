
module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {

            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 100]
            }
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_rating: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        transaction: {
            type: DataTypes.BOOLEAN,
            
        }
    })

    Customer.associate = function (models) {
        Customer.hasMany(models.Transaction, {
            onDelete: "cascade"
        })
    }

    return Customer
}







