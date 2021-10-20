require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const livrosRouter = require('./routes/livros');

const app = express();

app.use(cors());

main()
  .then(() => console.log('mongodb conected!'))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.ME_CONFIG_MONGODB_URL);
}

app.use(express.json());
app.use('/', livrosRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`Iniciando conexão em ${process.env.ME_CONFIG_MONGODB_URL}`);
});
