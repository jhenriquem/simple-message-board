import mongoose from "mongoose";


async function connectionDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Conectado ao MongoDB com sucesso!');
  }
  catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  };
}

export default connectionDB
