const express = require('express');
const sequelize = require('./config/database');

const curriculoRoutes = require('./route/curriculo');

const app = express();
app.use(express.json());

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida.'))
  .catch((err) => console.error('Erro na conexão com o banco de dados:', err));
  

app.use('/curriculos', curriculoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
