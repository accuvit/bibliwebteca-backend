require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const livrosRouter = require('./routes/livros');

const app = express();

main()
  .then(() => console.log('mongodb conected!'))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
}

app.use(express.json());
app.use('/', livrosRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log(`Iniciando conexão em ${process.env.DATABASE_URL}`);
});
