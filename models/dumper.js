module.exports = function(sequelize, DataTypes) {
    var Dumper = sequelize.define("Dumper",{
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        bckgrndChk_Status:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        user_rating:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        date_joined:{
            type: DataTypes.TIMESTAMP,
            allowNull: false,
            validate:{
                len: [1]
            }
        }
    });    
        return Dumper;    
    };
    
    
    
    
    
    
      