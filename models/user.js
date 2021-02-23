const sql = require("../config/db");

async function findByID(email) {
  //   sql.query(`select * from evaluado where email = '${email}'`, (err, res) => {
  //     if (err) {
  //       result({ status: 500, message: "Error en el servidor" }, null);
  //       return;
  //     } else {
  //       if (res.length) {
  //         result(null, res[0]);
  //         return;
  //       }
  //       result({ status: 404, message: "Usuario no encontrado" }, null);
  //       return;
  //     }
  //   });

  try {
    const result = await sql.query(
      `selet * from evaluado where email = '${email}'`
    );

    if (!result.length) {
      return { status: 404, message: "Usuario no encontrado" };
    } else if (!result) {
      return { status: 500, message: "Error en el servidor" };
    }

    return result;
  } catch (e) {
    return { status: 500, message: "Error en el servidor" };
  }
}

module.exports = { findByID };
