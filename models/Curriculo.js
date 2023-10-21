const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Curriculo = sequelize.define('Curriculo', {
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING,
  resumo: DataTypes.STRING,
  endereco: DataTypes.STRING,
  instituicao: DataTypes.STRING,
});

Curriculo.sync()
  .then(() => {
    console.log('Tabela "Curriculos" criada com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela "Curriculos":', error);
  });

module.exports = Curriculo;
