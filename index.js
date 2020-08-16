const express = require('express');
const path = require('path');
const sequelize = require('./settings/database');
const todoRoutes = require('./routes/todo');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/todo', todoRoutes);
app.use((_, res) => {
  res.sendFile('/index.html');
});


async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT)
  } catch (err) {
    console.log(err);
  }
}

start();