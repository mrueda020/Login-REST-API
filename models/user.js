const sql = require("../config/db");

async function findByID(email) {
  try {
    const result = await sql.query(
      `select * from users where email = '${email}'`
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
