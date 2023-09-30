const express = require("express");
const app = express();
const cors = require('cors');
// const session = require("express-session");


//la linea de abajo solo sirve para poder utilizar insomnia y que devuelva los valores en formato json
//y que tambien los introduzca en la tabla


app.use(express.json());
app.use(cors());

const db = require("./models");

// //Routers
const postRouter = require("./routes/users");
app.use("/users", postRouter);

const applicantRouter = require("./routes/applicant");
app.use("/applicant", applicantRouter);

// const usersRouter = require("./routes/usuario");
// app.use("/auth", usersRouter);

const utenteRouter = require("./routes/utente");
app.use("/auth", utenteRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});

//=======================================================
