const express = require("express");
const app = express();
const cors = require('cors');
// const session = require("express-session");


//la linea de abajo solo sirve para poder utilizar insomnia y que devuelva los valores en formato json
//y que tambien los introduzca en la tabla

app.use(cors());
app.use(express.json());


const db = require("./models");

// //Routers
// const postRouter = require("./routes/users");
// app.use("/users", postRouter);

const applicantRouter = require("./routes/applicant");
app.use("/applicant", applicantRouter);

const utenteRouter = require("./routes/utente");
app.use("/auth", utenteRouter);

const replacementRouter = require("./routes/requestReplacement");
app.use("/requestReplacement", replacementRouter);

const punctuationRouter = require("./routes/punctuation");
app.use("/punctuation", punctuationRouter);

const calculateAllScoresRouter = require("./routes/calculateAllScoresController");
app.use("/calculate-scores", calculateAllScoresRouter);

const postulationRouter = require("./routes/postulation");
app.use("/postulate", postulationRouter);


db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});

//=======================================================
