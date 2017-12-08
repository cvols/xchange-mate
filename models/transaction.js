module.exports = function (sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
        desired_currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_money: {
            type: DataTypes.INTEGER,
            allowNull: false
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fees: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_charges: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transaction: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })

    return Transaction
}


