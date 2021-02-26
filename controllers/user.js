const sql = require("../config/db");
const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

const signIn = async (req, res) => {
  const params = req.body;
  const { email, password } = params;

  const result = await User.findByID(email);

  if (result.status) {
    res.status(result.status).send({ message: result.message });
  } else {
    bcrypt.compare(password, result[0].password, (err, check) => {
      if (err) {
        res.status(500).send({ message: err });
      } else if (!check) {
        res.status(404).send({ message: "Las contraseñas no coinciden" });
      } else {
        res.status(200).send({ message: "Login correcto" });
      }
    });
  }
};

const signUp = async (req, res) => {
  const { email, name, lastname, password, repeatPassword } = req.body;

  const result = await User.findByID(email);
  if (result.length) {
    res.status(403).send({ message: "Email en uso" });
  } else {
    if (!password || !repeatPassword) {
      res.status(404).send({ message: "No hay contraseñas" });
    } else {
      if (password !== repeatPassword) {
        res.status(404).send({ message: "No coinciden las contraseñas" });
      } else {
        bcrypt.hash(password, null, null, (err, hash) => {
          if (err) {
            res.status(500).send({ message: "Bcrypt Error" });
          } else {
            let password = hash;

            let query = `INSERT INTO users (name,lastname,email,password) values ('${name}','${lastname}','${email}','${password}')`;

            sql.query(query, (err, result) => {
              if (err) {
                res.status(500).send({ message: "Server Error" });
              } else {
                res.status(200).send({ message: "Usuario creado" });
              }
            });
          }
        });
      }
    }
  }
};

module.exports = {
  signIn,
  signUp,
};
