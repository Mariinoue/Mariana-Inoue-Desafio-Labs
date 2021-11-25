const { Sequelize, DataTypes } = require('sequelize')
const { database } = require('../config/db')


const Deliverie = database.define('Deliverie',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false 
    }
    
        
    
})        
    
Deliverie.sync()     

module.exports = Deliverie