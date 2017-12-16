module.exports = function (sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        desired_currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_money: {
            type: DataTypes.INTEGER
        },
        current_currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transaction_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        exchange_rate: {
            type: DataTypes.DECIMAL(10, 5)
        },
        fees: {
            type: DataTypes.DECIMAL(10, 2)
        },
        total_charges: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transaction_date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transaction: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    Transaction.associate = function (models) {
        Transaction.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
        Transaction.belongsTo(models.Vendor, {
            foreignKey: {
                allowNull: true
            }
        })
    }

    return Transaction
}


