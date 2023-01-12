const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FavTrails extends Model {}

FavTrails.init(
    {
        favTrail_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        id: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        },
        length: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        directions: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        region: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        lat: {
            type: DataTypes.STRING
        },
        lon: {
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.STRING
        },
        features: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER
        },
        thumbnail: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            references:{
              model: 'user',
              key: 'id',
            }
        }
            },
            {
                sequelize,
                timestamps: false,
                freezeTableName: true,
                underscored: true,
                modelName: 'favTrails',
                
              }
        );

module.exports = FavTrails;