const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao banco de dados MongoDB Atlas');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados MongoDB Atlas:', err);
    process.exit(1); // Finaliza a aplicação em caso de erro
  }
};

module.exports = connectDB;